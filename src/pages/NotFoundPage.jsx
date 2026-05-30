import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="page-section">
      <p className="section-kicker">404</p>
      <h2>Ruta no encontrada</h2>
      <p>La ruta que intentaste abrir no existe en esta etapa de la migracion.</p>
      <Link className="inline-link" to="/">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFoundPage;