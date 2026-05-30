import { NavLink, Outlet } from 'react-router-dom';
import { team, members, logEntries } from '../../data/team';

const stats = [
    { value: members.length, label: 'integrantes' },
    { value: logEntries.length, label: 'entradas' },
    { value: '100%', label: 'react' }
];

function Layout() {
    return (
        <div className="site-shell">
            <header className="site-header">
                <div className="container hero-grid">
                    <div className="hero-content">
                        <p className="eyebrow">{team.tagline}</p>
                        <h1 className="hero-title">{team.name}</h1>
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
            </header>

            <nav className="site-nav" aria-label="Navegacion principal">
                <div className="container nav-list">
                    <NavLink className="nav-link" to="/" end>Inicio</NavLink>
                    <NavLink className="nav-link" to="/bitacora">Bitacora</NavLink>
                    {members.map((member) => (
                        <NavLink key={member.id} className="nav-link" to={`/integrantes/${member.id}`}>
                            {member.name}
                        </NavLink>
                    ))}
                </div>
            </nav>

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
    );
}

export default Layout;