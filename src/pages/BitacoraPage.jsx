import { logEntries } from '../data/team';

function LogEntry({ entry }) {
    return (
        <article className="timeline-entry">
            <p className="timeline-date">{entry.date}</p>
            <h3>{entry.title}</h3>
            <p className="timeline-text"><strong>Decisiones de diseño: </strong>{entry.decisions}</p>
            <p className="timeline-text"><strong>Dificultades: </strong>{entry.challenges}</p>
            <p className="timeline-text"><strong>Cambios: </strong>{entry.changes}</p>
        </article>
    );
}

function BitacoraPage() {
    return (
        <div className="container page-stack">
            <section className="section-heading">
                <p className="eyebrow">Proceso</p>
                <h2>Bitácora de desarrollo</h2>
            </section>

            <section className="workflow-section" style={{ marginBottom: '3rem', padding: '1.5rem', backgroundColor: 'var(--color-surface, #fff)', borderRadius: '8px', border: '1px solid var(--color-line, #eee)' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary-dark, #333)' }}>Roles en este proyecto</h3>
                    <ul style={{ listStylePosition: 'inside', lineHeight: '1.8' }}>
                        <li><strong>Valeria Mansueto:</strong> Scrum Master e Integración</li>
                        <li><strong>Antonella Masini:</strong> UI/UX y Desarrollo Frontend</li>
                        <li><strong>Cristian Nicoletti:</strong> Desarrollo y Documentación</li>
                        <li><strong>Guillermo Novillo:</strong> Desarrollo</li>
                        <li><strong>Facundo Bascur:</strong> Desarrollo</li>
                    </ul>
                </div>

                <div>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary-dark, #333)' }}>Flujo de Trabajo (GitFlow)</h3>
                    <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                        Utilizamos <strong>GitFlow</strong> como estrategia única de control de versiones.
                        Todas las ramas de nuevas características o desarrollos aislados se crearon utilizando el
                        <strong> número de la tarea o issue asignada</strong>.
                    </p>
                    <p style={{ lineHeight: '1.6' }}>
                        El trabajo individualizado de cada integrante se integra finalmente a la rama de integración <code>desa</code> mediante <strong>Pull Requests</strong>,
                        y una vez validado, pasa a la rama estable <code>main</code>, la cual está conectada a Vercel para el despliegue automático.
                    </p>
                </div>
            </section>

            <section className="timeline">
                {logEntries.map((entry) => (
                    <LogEntry key={entry.title} entry={entry} />
                ))}
            </section>
        </div>
    );
}

export default BitacoraPage;