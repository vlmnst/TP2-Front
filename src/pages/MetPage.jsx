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

function buildSearchUrl({ query, mode, yearFrom, yearTo }) {
    const params = new URLSearchParams({
        q: query.trim() || DEFAULT_QUERY,
        hasImages: 'true',
    });

    if (mode === 'title') {
        params.set('title', 'true');
    }

    if (mode === 'artist') {
        params.set('artistOrCulture', 'true');
    }

    const hasFrom = yearFrom.trim() !== '';
    const hasTo = yearTo.trim() !== '';

    if (hasFrom || hasTo) {
        const normalizedFrom = hasFrom ? Number(yearFrom) : YEAR_MIN;
        const normalizedTo = hasTo ? Number(yearTo) : YEAR_MAX;
        const dateBegin = Math.min(normalizedFrom, normalizedTo);
        const dateEnd = Math.max(normalizedFrom, normalizedTo);

        params.set('dateBegin', String(dateBegin));
        params.set('dateEnd', String(dateEnd));
    }

    return `${API_BASE}/search?${params.toString()}`;
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
    const [pageItems, setPageItems] = useState([]);
    const [cache, setCache] = useState({});
    const [isSearching, setIsSearching] = useState(false);
    const [isLoadingPage, setIsLoadingPage] = useState(false);
    const [error, setError] = useState('');
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
    }, [debouncedFilters]);

    useEffect(() => {
        const controller = new AbortController();

        async function searchArtworks() {
            setIsSearching(true);
            setError('');

            try {
                const response = await fetch(buildSearchUrl(debouncedFilters), {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error('No se pudo consultar la API del MET.');
                }

                const data = await response.json();
                setResultIds(data.objectIDs || []);
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

    useEffect(() => {
        const controller = new AbortController();
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const visibleIds = resultIds.slice(start, start + ITEMS_PER_PAGE);

        if (visibleIds.length === 0) {
            setPageItems([]);
            return () => controller.abort();
        }

        async function loadPageItems() {
            setIsLoadingPage(true);

            try {
                const fetchedItems = await Promise.all(
                    visibleIds.map(async (objectId) => {
                        if (cache[objectId]) {
                            return cache[objectId];
                        }

                        const response = await fetch(`${API_BASE}/objects/${objectId}`, {
                            signal: controller.signal,
                        });

                        if (!response.ok) {
                            throw new Error(`No se pudo traer la obra ${objectId}.`);
                        }

                        return normalizeArtwork(await response.json());
                    })
                );

                const nextCache = {};

                fetchedItems.forEach((artwork) => {
                    nextCache[artwork.objectID] = artwork;
                });

                if (Object.keys(nextCache).length > 0) {
                    setCache((currentCache) => ({
                        ...currentCache,
                        ...nextCache,
                    }));
                }
                setPageItems(fetchedItems);
            } catch (pageError) {
                if (pageError.name !== 'AbortError') {
                    setPageItems([]);
                    setError('Los resultados aparecieron, pero no se pudieron renderizar las miniaturas.');
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoadingPage(false);
                }
            }
        }

        loadPageItems();

        return () => controller.abort();
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
            return 'Consultando expedientes del museo...';
        }

        if (error) {
            return error;
        }

        return `${resultIds.length} obras encontradas`;
    }, [error, isSearching, resultIds.length]);

    return (
        <div className="container page-stack met-page">
            <section className="section-heading met-heading">
                <p className="eyebrow">Coleccion interactiva</p>
                <h2>Museo MET</h2>
                <p className="met-intro">
                    Explora la coleccion del Metropolitan Museum of Art con una busqueda por artista o titulo,
                    filtra por rango de creacion y abre cada obra como si fuera un expediente reservado.
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
                        <option value="all">Todo</option>
                        <option value="title">Titulo</option>
                        <option value="artist">Artista o cultura</option>
                    </select>
                </label>

                <label className="met-field met-field-year">
                    <span>Desde</span>
                    <input
                        type="number"
                        value={yearFrom}
                        onChange={(event) => setYearFrom(event.target.value)}
                        placeholder="-4000"
                    />
                </label>

                <label className="met-field met-field-year">
                    <span>Hasta</span>
                    <input
                        type="number"
                        value={yearTo}
                        onChange={(event) => setYearTo(event.target.value)}
                        placeholder={String(YEAR_MAX)}
                    />
                </label>
            </section>

            <section className="met-status-row">
                <p className="met-status">{resultSummary}</p>
                <p className="met-status met-status-muted">12 expedientes por pagina</p>
            </section>

            {isLoadingPage ? (
                <section className="met-grid met-grid-skeleton" aria-label="Cargando resultados">
                    {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                        <div key={index} className="met-card met-card-skeleton" />
                    ))}
                </section>
            ) : pageItems.length > 0 ? (
                <section className="met-grid" aria-label="Resultados del museo">
                    {pageItems.map((artwork, index) => (
                        <button
                            key={artwork.objectID}
                            type="button"
                            className="met-card"
                            style={{ '--animation-delay': `${index * 45}ms` }}
                            onClick={() => setSelectedId(artwork.objectID)}
                        >
                            <div className="met-card-media">
                                {artwork.primaryImageSmall ? (
                                    <img
                                        src={artwork.primaryImageSmall}
                                        alt={artwork.title}
                                        className="met-card-image"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="met-card-image met-card-image-fallback" aria-hidden="true">
                                        <span>MET #{artwork.objectID}</span>
                                    </div>
                                )}
                            </div>

                            <div className="met-card-copy">
                                <span className="met-card-id">Object ID #{artwork.objectID}</span>
                                <span className="met-card-prompt">Abrir expediente</span>
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