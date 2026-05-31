import { useEffect, useMemo, useState } from 'react';
import Pagination from '../components/Pagination';
import MetArtworkModal from '../components/MetArtworkModal';

const API_BASE = 'https://collectionapi.metmuseum.org/public/collection/v1';
const ITEMS_PER_PAGE = 12;
const DEFAULT_QUERY = 'painting';
const YEAR_MIN = -4000;
const YEAR_MAX = new Date().getFullYear();

function normalizeImageUrl(value) {
    const normalized = value?.trim();
    return normalized ? normalized : null;
}

function parseYearInput(value) {
    const normalized = value.trim();

    if (normalized === '' || !/^-?\d+$/.test(normalized)) {
        return null;
    }

    return Math.min(YEAR_MAX, Math.max(YEAR_MIN, Number(normalized)));
}

function buildSearchParams({ query, yearFrom, yearTo }) {
    const params = new URLSearchParams({
        q: query.trim() || DEFAULT_QUERY,
        hasImages: 'true',
    });

    const normalizedFrom = parseYearInput(yearFrom);
    const normalizedTo = parseYearInput(yearTo);

    if (normalizedFrom !== null || normalizedTo !== null) {
        const dateBegin = normalizedFrom ?? normalizedTo;
        const dateEnd = normalizedTo ?? normalizedFrom;

        params.set('dateBegin', String(Math.min(dateBegin, dateEnd)));
        params.set('dateEnd', String(Math.max(dateBegin, dateEnd)));
    }

    return params;
}

function buildSearchUrl(filters, scope = 'all') {
    const params = buildSearchParams(filters);

    if (scope === 'title') {
        params.set('title', 'true');
    }

    if (scope === 'artist') {
        params.set('artistOrCulture', 'true');
    }

    return `${API_BASE}/search?${params.toString()}`;
}

async function fetchSearchIds(filters, scope, signal) {
    const response = await fetch(buildSearchUrl(filters, scope), { signal });

    if (!response.ok) {
        throw new Error('No se pudo consultar la API del MET.');
    }

    const data = await response.json();
    return data.objectIDs || [];
}

function normalizeArtwork(artwork) {
    return {
        objectID: artwork.objectID,
        primaryImage: normalizeImageUrl(artwork.primaryImage),
        primaryImageSmall: normalizeImageUrl(artwork.primaryImageSmall),
        title: artwork.title,
        artistDisplayName: artwork.artistDisplayName,
        objectDate: artwork.objectDate,
        objectBeginDate: artwork.objectBeginDate,
        objectEndDate: artwork.objectEndDate,
        department: artwork.department,
        medium: artwork.medium,
        classification: artwork.classification,
        culture: artwork.culture,
        country: artwork.country,
        objectURL: artwork.objectURL,
    };
}

function MetPage() {
    const [query, setQuery] = useState('');
    const [mode, setMode] = useState('all');
    const [yearFrom, setYearFrom] = useState('');
    const [yearTo, setYearTo] = useState('');
    const [debouncedFilters, setDebouncedFilters] = useState({
        query: '',
        mode: 'all',
        yearFrom: '',
        yearTo: '',
    });
    const [resultIds, setResultIds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cache, setCache] = useState({});
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState('');
    const [unlockingId, setUnlockingId] = useState(null);
    const [revealedIds, setRevealedIds] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedArtwork, setSelectedArtwork] = useState(null);
    const [isModalLoading, setIsModalLoading] = useState(false);
    const [modalError, setModalError] = useState('');

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setDebouncedFilters({ query, mode, yearFrom, yearTo });
        }, 350);

        return () => window.clearTimeout(timeoutId);
    }, [query, mode, yearFrom, yearTo]);

    useEffect(() => {
        setCurrentPage(1);
        setUnlockingId(null);
        setSelectedId(null);
    }, [debouncedFilters]);

    useEffect(() => {
        if (unlockingId === null) {
            return undefined;
        }

        const timeoutId = window.setTimeout(() => {
            setRevealedIds((currentIds) => (
                currentIds.includes(unlockingId) ? currentIds : [...currentIds, unlockingId]
            ));
            setSelectedId(unlockingId);
            setUnlockingId(null);
        }, 620);

        return () => window.clearTimeout(timeoutId);
    }, [unlockingId]);

    useEffect(() => {
        const controller = new AbortController();

        async function searchArtworks() {
            setIsSearching(true);
            setError('');

            try {
                const trimmedQuery = debouncedFilters.query.trim();
                let nextIds = [];

                if (debouncedFilters.mode === 'artist') {
                    nextIds = await fetchSearchIds(debouncedFilters, 'artist', controller.signal);
                } else if (trimmedQuery) {
                    const [artistIds, titleIds] = await Promise.all([
                        fetchSearchIds(debouncedFilters, 'artist', controller.signal),
                        fetchSearchIds(debouncedFilters, 'title', controller.signal),
                    ]);

                    nextIds = [...new Set([...artistIds, ...titleIds])];

                    if (nextIds.length === 0) {
                        nextIds = await fetchSearchIds(debouncedFilters, 'all', controller.signal);
                    }
                } else {
                    nextIds = await fetchSearchIds(debouncedFilters, 'all', controller.signal);
                }

                setResultIds(
                    trimmedQuery
                        ? nextIds.slice()
                        : nextIds.slice().sort((left, right) => left - right)
                );
            } catch (searchError) {
                if (searchError.name !== 'AbortError') {
                    setResultIds([]);
                    setError('No pudimos traer resultados del museo. Proba de nuevo en unos segundos.');
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsSearching(false);
                }
            }
        }

        searchArtworks();

        return () => controller.abort();
    }, [debouncedFilters]);

    const totalPages = Math.max(1, Math.ceil(resultIds.length / ITEMS_PER_PAGE));
    const pageIds = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return resultIds.slice(start, start + ITEMS_PER_PAGE);
    }, [currentPage, resultIds]);

    useEffect(() => {
        if (selectedId === null) {
            setSelectedArtwork(null);
            setModalError('');
            setIsModalLoading(false);
            return;
        }

        if (cache[selectedId]) {
            setSelectedArtwork(cache[selectedId]);
            setModalError('');
            setIsModalLoading(false);
            return;
        }

        const controller = new AbortController();

        async function loadArtwork() {
            setSelectedArtwork(null);
            setIsModalLoading(true);
            setModalError('');

            try {
                const response = await fetch(`${API_BASE}/objects/${selectedId}`, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error('No se pudo abrir la ficha de esta obra.');
                }

                const artwork = normalizeArtwork(await response.json());
                setCache((currentCache) => ({
                    ...currentCache,
                    [artwork.objectID]: artwork,
                }));
                setSelectedArtwork(artwork);
            } catch (selectedError) {
                if (selectedError.name !== 'AbortError') {
                    setModalError('No se pudo cargar el detalle de la obra seleccionada.');
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsModalLoading(false);
                }
            }
        }

        loadArtwork();

        return () => controller.abort();
    }, [selectedId]);

    const resultSummary = useMemo(() => {
        if (isSearching) {
            return 'Ordenando expedientes del museo...';
        }

        if (error) {
            return error;
        }

        return `${resultIds.length} expedientes encontrados`;
    }, [error, isSearching, resultIds.length]);

    return (
        <div className="container page-stack met-page">
            <section className="section-heading met-heading">
                <p className="eyebrow">Archivo interactivo</p>
                <h2>Archivo / Expedientes</h2>
                <p className="met-intro">
                    Recorre el archivo del MET como una mesa de expedientes: busca por artista, cultura o palabra clave,
                    filtra por rango de creacion y desbloquea cada registro para revelar la obra.
                </p>
            </section>

            <section className="met-controls" aria-label="Filtros del museo">
                <label className="met-field">
                    <span>Texto</span>
                    <input
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Ej. Monet, armor, sunflower"
                    />
                </label>

                <label className="met-field">
                    <span>Buscar en</span>
                    <select value={mode} onChange={(event) => setMode(event.target.value)}>
                        <option value="all">Artista o titulo</option>
                        <option value="artist">Artista o cultura</option>
                    </select>
                </label>

                <label className="met-field met-field-year">
                    <span>Desde</span>
                    <input
                        type="number"
                        value={yearFrom}
                        onChange={(event) => setYearFrom(event.target.value)}
                        placeholder="1889"
                    />
                </label>

                <label className="met-field met-field-year">
                    <span>Hasta</span>
                    <input
                        type="number"
                        value={yearTo}
                        onChange={(event) => setYearTo(event.target.value)}
                        placeholder="1905"
                    />
                </label>
            </section>

            <section className="met-status-row">
                <p className="met-status">{resultSummary}</p>
                <p className="met-status met-status-muted">
                    12 expedientes por pagina. Si completas un solo año, se toma como fecha puntual.
                </p>
            </section>

            {isSearching ? (
                <section className="met-grid met-grid-skeleton" aria-label="Cargando resultados">
                    {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                        <div key={index} className="met-card met-card-skeleton" />
                    ))}
                </section>
            ) : pageIds.length > 0 ? (
                <section className="met-grid" aria-label="Resultados del museo">
                    {pageIds.map((objectId, index) => (
                        <button
                            key={objectId}
                            type="button"
                            className={`met-card met-card-shell ${revealedIds.includes(objectId) ? 'is-revealed' : ''}`}
                            style={{ '--animation-delay': `${index * 45}ms` }}
                            onClick={() => setUnlockingId(objectId)}
                        >
                            <div className="met-card-copy met-card-copy-shell">
                                <span className="met-card-kicker">
                                    {revealedIds.includes(objectId) ? 'Expediente revelado' : 'Archivo reservado'}
                                </span>
                                <span className="met-card-id">Numero de obra: #{objectId}</span>
                                <span className="met-card-prompt">
                                    {revealedIds.includes(objectId)
                                        ? 'Click para revisar nuevamente'
                                        : 'Click para desbloquear la obra'}
                                </span>
                            </div>
                        </button>
                    ))}
                </section>
            ) : (
                <section className="met-empty-state">
                    <p className="eyebrow">Sin coincidencias</p>
                    <h3>No encontramos obras para ese filtro</h3>
                    <p>Proba con otro artista, un titulo mas general o un rango de anos mas amplio.</p>
                </section>
            )}

            <Pagination
                currentPage={Math.min(currentPage, totalPages)}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />

            {unlockingId !== null ? (
                <div className="lightbox-overlay met-unlock-overlay">
                    <div className="met-unlock-card">
                        <p className="eyebrow">Desbloqueando expediente</p>
                        <h3>Object ID #{unlockingId}</h3>
                        <div className="met-unlock-bar" aria-hidden="true">
                            <span />
                        </div>
                        <p className="met-unlock-copy">Recuperando imagen y metadatos del archivo central...</p>
                    </div>
                </div>
            ) : null}

            {selectedId !== null ? (
                <MetArtworkModal
                    artwork={selectedArtwork}
                    isLoading={isModalLoading}
                    error={modalError}
                    onClose={() => setSelectedId(null)}
                />
            ) : null}
        </div>
    );
}

export default MetPage;