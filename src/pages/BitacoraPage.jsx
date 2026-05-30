import { logEntries } from '../data/team';

function LogEntry({ entry }) {
    return (
        <article className="timeline-entry">
            <p className="timeline-date">{entry.date}</p>
            <h3>{entry.title}</h3>
            <p className="timeline-text"><strong>Decisiones de diseno: </strong>{entry.decisions}</p>
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
                <h2>Bitacora de desarrollo</h2>
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