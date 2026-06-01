const renderTree = [
    {
        name: 'main.jsx',
        type: 'entry',
        description: 'Punto de entrada: monta React dentro del nodo root del HTML.',
        children: [
            {
                name: 'App',
                type: 'root',
                description: 'Componente raíz de la aplicación.',
                children: [
                    {
                        name: 'RouterProvider',
                        type: 'route',
                        description: 'Conecta React Router con la configuración de rutas.',
                        children: [
                            {
                                name: 'Layout',
                                type: 'layout',
                                description: 'Estructura persistente del dashboard.',
                                children: [
                                    {
                                        name: 'Sidebar',
                                        type: 'layout',
                                        description: 'Navegación global con logo, grupos y submenús.',
                                        children: [
                                            { name: 'Logo del grupo', type: 'component' },
                                            { name: 'Navegación general', type: 'component' },
                                            { name: 'Submenú de integrantes', type: 'component' },
                                            { name: 'Navegación de exploración', type: 'component' },
                                        ],
                                    },
                                    {
                                        name: 'Header / Topbar',
                                        type: 'component',
                                        description: 'Barra superior con control mobile de la Sidebar.',
                                    },
                                    {
                                        name: 'Outlet',
                                        type: 'route',
                                        description: 'Zona donde React Router renderiza la página activa.',
                                        children: [
                                            {
                                                name: 'HomePage',
                                                type: 'page',
                                                children: [
                                                    { name: 'MemberCard', type: 'component' },
                                                    { name: 'MessagePanel', type: 'component' },
                                                ],
                                            },
                                            {
                                                name: 'MemberPage',
                                                type: 'page',
                                                children: [
                                                    {
                                                        name: 'ProfileAside',
                                                        type: 'component',
                                                        children: [
                                                            { name: 'SocialButtons', type: 'component' },
                                                        ],
                                                    },
                                                    {
                                                        name: 'SectionRenderer',
                                                        type: 'component',
                                                        children: [
                                                            { name: 'SectionIntro', type: 'component' },
                                                            { name: 'SectionList', type: 'component' },
                                                            {
                                                                name: 'SectionProgress',
                                                                type: 'component',
                                                                children: [
                                                                    { name: 'ProgressBar', type: 'component' },
                                                                ],
                                                            },
                                                            { name: 'SectionProjects', type: 'component' },
                                                            { name: 'SectionFlip', type: 'component' },
                                                            { name: 'SectionFavorites', type: 'component' },
                                                            { name: 'SectionExtra', type: 'component' },
                                                        ],
                                                    },
                                                    { name: 'TechStack', type: 'component' },
                                                ],
                                            },
                                            {
                                                name: 'JsonExplorer',
                                                type: 'page',
                                                children: [
                                                    { name: 'JsonMemberCard', type: 'component' },
                                                ],
                                            },
                                            {
                                                name: 'GalleryPage',
                                                type: 'page',
                                                children: [
                                                    { name: 'Lightbox', type: 'modal' },
                                                ],
                                            },
                                            {
                                                name: 'MetPage',
                                                type: 'page',
                                                children: [
                                                    { name: 'Pagination', type: 'component' },
                                                    { name: 'MetArtworkModal', type: 'modal' },
                                                ],
                                            },
                                            { name: 'BitacoraPage', type: 'page' },
                                            { name: 'NotFoundPage', type: 'page' },
                                        ],
                                    },
                                    { name: 'Footer', type: 'component' },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const roleCards = [
    {
        title: 'App',
        label: 'Raíz',
        text: 'Es el primer componente propio de React y entrega el control al RouterProvider.',
    },
    {
        title: 'RouterProvider',
        label: 'Rutas',
        text: 'Lee la configuración de rutas y decide qué pantalla se renderiza.',
    },
    {
        title: 'Layout',
        label: 'Estructura',
        text: 'Mantiene Sidebar, topbar, área principal, hero contextual y footer.',
    },
    {
        title: 'Sidebar',
        label: 'Navegación',
        text: 'Organiza la experiencia de usuario y da acceso a las secciones principales.',
    },
    {
        title: 'Outlet',
        label: 'Render dinámico',
        text: 'Es el espacio donde aparece Home, perfiles, galería, MET, JSON o bitácora.',
    },
];

function RenderTreeNode({ node, level = 0 }) {
    const hasChildren = node.children?.length > 0;

    return (
        <li className={`architecture-node architecture-node-level-${level}`}>
            <div className="architecture-node-card">
                <span className={`architecture-chip architecture-chip-${node.type}`}>
                    {node.type}
                </span>
                <div>
                    <strong>{node.name}</strong>
                    {node.description ? <p>{node.description}</p> : null}
                </div>
            </div>

            {hasChildren ? (
                <ul className="architecture-branch">
                    {node.children.map((child) => (
                        <RenderTreeNode key={`${node.name}-${child.name}`} node={child} level={level + 1} />
                    ))}
                </ul>
            ) : null}
        </li>
    );
}

function ArchitecturePage() {
    return (
        <div className="container page-stack architecture-page">
            <section className="section-heading architecture-heading">
                <p className="eyebrow">Arquitectura React</p>
                <h2>Árbol de renderizado</h2>
                <p>
                    Este esquema muestra cómo se encadenan los componentes de la aplicación:
                    desde el punto de entrada hasta las páginas, cards, secciones, botones y
                    modales que se renderizan según la ruta activa.
                </p>
            </section>

            <section className="architecture-summary-grid" aria-label="Lectura rápida del árbol">
                {roleCards.map((card) => (
                    <article key={card.title} className="architecture-role-card">
                        <span>{card.label}</span>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                    </article>
                ))}
            </section>

            <section className="architecture-tree-panel" aria-label="Diagrama del árbol de renderizado">
                <div className="architecture-panel-header">
                    <div>
                        <p className="eyebrow">Jerarquía completa</p>
                        <h3>Del root al componente hijo</h3>
                    </div>
                    <p>
                        La rama <strong>Outlet</strong> cambia según la URL; el resto del
                        <strong> Layout</strong> permanece estable en toda la SPA.
                    </p>
                </div>

                <ul className="architecture-tree">
                    {renderTree.map((node) => (
                        <RenderTreeNode key={node.name} node={node} />
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default ArchitecturePage;
