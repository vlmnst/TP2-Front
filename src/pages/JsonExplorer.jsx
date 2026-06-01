import { useEffect, useMemo, useState } from 'react';
import JsonMemberCard from '../components/JsonMemberCard';
import useDebounce from '../hooks/useDebounce';
import applicants from '../data/applicant.json';

const ITEMS_PER_PAGE = 6;

function getUniqueRoles(data) {
    return [...new Set(data.map((member) => member.role))].sort((a, b) =>
        a.localeCompare(b, 'es')
    );
}

function getUniqueSkills(data) {
    return [...new Set(data.flatMap((member) => member.tags))].sort((a, b) =>
        a.localeCompare(b, 'es')
    );
}

function matchesFilters(member, query, role, skill) {
    if (role && member.role !== role) return false;
    if (skill && !member.tags.includes(skill)) return false;
    if (!query) return true;

    const normalizedQuery = query.toLowerCase();

    return (
        member.nombre.toLowerCase().includes(normalizedQuery) ||
        member.role.toLowerCase().includes(normalizedQuery) ||
        member.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))
    );
}

function getActiveFilters(search, role, skill) {
    const filters = [];

    if (search) filters.push({ label: 'Búsqueda', value: search });
    if (role) filters.push({ label: 'Rol', value: role });
    if (skill) filters.push({ label: 'Skill', value: skill });

    return filters;
}

function JsonExplorer() {
    const [search, setSearch] = useState('');
    const [roleFilter, setRoleFilter] = useState('');
    const [skillFilter, setSkillFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const debouncedSearch = useDebounce(search, 300);

    const roleOptions = useMemo(() => getUniqueRoles(applicants), []);
    const skillOptions = useMemo(() => getUniqueSkills(applicants), []);

    const filteredMembers = useMemo(
        () =>
            applicants.filter((member) =>
                matchesFilters(member, debouncedSearch.trim(), roleFilter, skillFilter)
            ),
        [debouncedSearch, roleFilter, skillFilter]
    );

    const totalPages = Math.max(1, Math.ceil(filteredMembers.length / ITEMS_PER_PAGE));

    const pageMembers = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredMembers.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredMembers, currentPage]);

    const activeFilters = useMemo(
        () => getActiveFilters(debouncedSearch.trim(), roleFilter, skillFilter),
        [debouncedSearch, roleFilter, skillFilter]
    );

    const isFiltering = search !== debouncedSearch;

    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearch, roleFilter, skillFilter]);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    return (
        <div className="container page-stack">
            <section className="section-heading">
                <p className="eyebrow">Datos locales</p>
                <h2>JSON Explorer</h2>
            </section>

            <article className="json-explorer-intro">
                <div>
                    <h3>Explorador de perfiles</h3>
                    <p>
                        Esta vista carga dinamicamente el archivo <code>applicant.json</code> con 20
                        perfiles de postulantes a sumarse al grupo Parabellum Devs.
                        Podes buscar por nombre, rol o skills tecnologicos.
                    </p>
                </div>
                <dl className="json-explorer-stats">
                    <div>
                        <dt>Registros</dt>
                        <dd>{applicants.length}</dd>
                    </div>
                </dl>
            </article>

            <div className="json-explorer-toolbar">
                <div className="json-explorer-filters">
                    <label className="json-search-field" htmlFor="json-search">
                        <span>Búsqueda General</span>
                        <input
                            id="json-search"
                            className="json-search-input"
                            type="search"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Ingrese nombre, apellido, rol o skill"
                            autoComplete="off"
                        />
                    </label>

                    <label className="json-search-field" htmlFor="json-role-filter">
                        <span>Rol</span>
                        <select
                            id="json-role-filter"
                            className="json-filter-select"
                            value={roleFilter}
                            onChange={(event) => setRoleFilter(event.target.value)}
                        >
                            <option value="">Todos los roles</option>
                            {roleOptions.map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="json-search-field" htmlFor="json-skill-filter">
                        <span>Skill</span>
                        <select
                            id="json-skill-filter"
                            className="json-filter-select"
                            value={skillFilter}
                            onChange={(event) => setSkillFilter(event.target.value)}
                        >
                            <option value="">Todas las skills</option>
                            {skillOptions.map((skill) => (
                                <option key={skill} value={skill}>
                                    {skill}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <aside className="json-search-summary" aria-live="polite">
                    <div className="json-search-summary-header">
                        <p className="json-search-summary-title">Resultados de la búsqueda</p>
                        {isFiltering ? (
                            <span className="json-search-status">Filtrando...</span>
                        ) : null}
                    </div>

                    <div className="json-search-summary-filters">
                        {activeFilters.length > 0 ? (
                            activeFilters.map((filter) => (
                                <span key={filter.label} className="json-search-summary-chip">
                                    <strong>{filter.label}:</strong> {filter.value}
                                </span>
                            ))
                        ) : (
                            <span className="json-search-summary-chip json-search-summary-chip-muted">
                                Sin filtros activos
                            </span>
                        )}
                    </div>

                    <dl className="json-search-summary-stats">
                        <div>
                            <dt>Resultados</dt>
                            <dd>{filteredMembers.length}</dd>
                        </div>
                        <div>
                            <dt>Páginas</dt>
                            <dd>{totalPages}</dd>
                        </div>
                        <div>
                            <dt>Página actual</dt>
                            <dd>
                                {currentPage} / {totalPages}
                            </dd>
                        </div>
                    </dl>
                </aside>
            </div>

            {pageMembers.length > 0 ? (
                <section className="json-member-grid" aria-label="Perfiles del JSON">
                    {pageMembers.map((member, index) => (
                        <JsonMemberCard
                            key={member.id}
                            member={member}
                            order={index + 1}
                        />
                    ))}
                </section>
            ) : (
                <p className="json-empty-state">
                    No se encontraron perfiles con los filtros seleccionados.
                </p>
            )}

            <nav className="json-pagination" aria-label="Paginacion de perfiles">
                <button
                    type="button"
                    className="button button-light"
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <p className="json-pagination-label">
                    Pagina {currentPage} de {totalPages}
                </p>
                <button
                    type="button"
                    className="button button-primary"
                    onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                    disabled={currentPage === totalPages || filteredMembers.length === 0}
                >
                    Siguiente
                </button>
            </nav>
        </div>
    );
}

export default JsonExplorer;
