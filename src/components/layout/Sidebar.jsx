import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Sidebar({ team, members, isOpen, onClose }) {
    const location = useLocation();
    const [isMembersExpanded, setIsMembersExpanded] = useState(
        location.pathname.startsWith('/integrantes')
    );

    return (
        <aside className={`sidebar ${isOpen ? 'is-open' : ''}`} aria-label="Sidebar principal">
            <div className="sidebar-inner">
                <div className="sidebar-brand">
                    <div className="sidebar-brand-lockup">
                        <img
                            className="sidebar-logo"
                            src="/img/iftslogo.png"
                            alt="Logo de Grupo 2D"
                            width="64"
                            height="64"
                        />
                        <div>
                            <p className="sidebar-kicker">TP2 Frontend</p>
                            <h1 className="sidebar-title">{team.name}</h1>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="sidebar-close"
                        onClick={onClose}
                        aria-label="Cerrar menu lateral"
                    >
                        Cerrar
                    </button>
                </div>

                <nav className="sidebar-nav" aria-label="Navegacion principal">
                    <div className="sidebar-group">
                        <p className="sidebar-group-label">General</p>

                        <NavLink className="sidebar-link" to="/" end onClick={onClose}>
                            <span>Inicio</span>
                            <small>Portada del equipo</small>
                        </NavLink>

                        <NavLink className="sidebar-link" to="/bitacora" onClick={onClose}>
                            <span>Bitacora</span>
                            <small>Proceso y decisiones</small>
                        </NavLink>

                        <NavLink className="sidebar-link" to="/arquitectura" onClick={onClose}>
                            <span>Arquitectura</span>
                            <small>Arbol de componentes</small>
                        </NavLink>
                    </div>

                    <div className="sidebar-group">
                        <button
                            type="button"
                            className={`sidebar-link sidebar-link-toggle ${isMembersExpanded ? 'is-expanded' : ''}`}
                            onClick={() => setIsMembersExpanded((current) => !current)}
                            aria-expanded={isMembersExpanded}
                            aria-controls="sidebar-members-list"
                        >
                            <span>Integrantes</span>
                        </button>

                        {isMembersExpanded ? (
                            <div id="sidebar-members-list" className="sidebar-submenu">
                                {members.map((member) => (
                                    <NavLink
                                        key={member.id}
                                        className="sidebar-sublink"
                                        to={`/integrantes/${member.id}`}
                                        onClick={onClose}
                                    >
                                        <span
                                            className="sidebar-member-dot"
                                            style={{ '--member-accent': member.accent }}
                                            aria-hidden="true"
                                        />
                                        {member.name}
                                    </NavLink>
                                ))}
                            </div>
                        ) : null}
                    </div>

                    <div className="sidebar-group">
                        <p className="sidebar-group-label">Exploracion</p>

                        <NavLink className="sidebar-link" to="/jsonexplorer" onClick={onClose}>
                            <span>Postulantes</span>
                        </NavLink>

                        <NavLink className="sidebar-link" to="/galeria" onClick={onClose}>
                            <span>Galería de Imágenes</span>
                        </NavLink>

                        <NavLink className="sidebar-link" to="/met" onClick={onClose}>
                            <span>Museo MET</span>
                            <small>Busqueda viva y archivo visual</small>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
