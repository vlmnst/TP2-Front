import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { team, members, logEntries } from '../../data/team';
import Sidebar from './Sidebar';

const stats = [
    { value: members.length, label: 'integrantes' },
    { value: logEntries.length, label: 'entradas' },
    { value: '100%', label: 'react' }
];

function Layout() {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const isImmersiveView = location.pathname === '/galeria' || location.pathname === '/met';

    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location.pathname]);

    return (
        <div className={`site-shell app-shell ${isSidebarOpen ? 'is-sidebar-open' : ''}`}>
            <Sidebar
                team={team}
                members={members}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <button
                type="button"
                className="app-overlay"
                aria-label="Cerrar menu lateral"
                onClick={() => setIsSidebarOpen(false)}
            />

            <div className="app-main-shell">
                <header className="content-topbar">
                    <div className="container content-topbar-inner">
                        <button
                            type="button"
                            className="sidebar-toggle"
                            onClick={() => setIsSidebarOpen((current) => !current)}
                            aria-expanded={isSidebarOpen}
                            aria-controls="sidebar-members-list"
                        >
                            Menu
                        </button>
                    </div>
                </header>

                {!isImmersiveView && (
                    <section className="content-hero-wrap">
                        <div className="container hero-grid content-hero-grid">
                            <div className="hero-content">
                                <p className="eyebrow">Arquitectura y navegacion</p>
                                <h2 className="hero-title content-hero-title">{team.name}</h2>
                                <p className="hero-copy">{team.description}</p>
                            </div>

                            <dl className="hero-stats">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="stat-item">
                                        <dt>{stat.label}</dt>
                                        <dd>{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </section>
                )}

                <main className="site-main">
                    <Outlet />
                </main>

                <footer className="site-footer">
                    <div className="container footer-inner">
                        <p>&copy; 2026 {team.name}</p>
                        <p>React + Vite + React Router</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Layout;