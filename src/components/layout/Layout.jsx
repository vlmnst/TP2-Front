import { NavLink, Outlet } from 'react-router-dom';

const memberLinks = [1, 2, 3, 4, 5];

function Layout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <p className="site-eyebrow">TP2 Frontend</p>
        <h1>Grupo 2D en React</h1>
        <p className="site-copy">
          Base inicial de migracion desde HTML, CSS y JavaScript vanilla hacia una arquitectura de componentes.
        </p>
      </header>

      <nav className="site-nav" aria-label="Principal">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/bitacora">Bitacora</NavLink>
        {memberLinks.map((memberId) => (
          <NavLink key={memberId} to={`/integrantes/${memberId}`}>
            Integrante {memberId}
          </NavLink>
        ))}
      </nav>

      <main className="site-main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;