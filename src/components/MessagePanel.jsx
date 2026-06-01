import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { members } from '../data/team';

function getProjectPool() {
    return members.flatMap((member) => {
        const projectSection = member.sections?.find((section) => section.type === 'projects');
        const project = projectSection?.items?.[0];

        return project
            ? [{
                member,
                project,
                id: `${member.id}-0`,
            }]
            : [];
    });
}

function MessagePanel() {
    const projectPool = useMemo(() => getProjectPool(), []);
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentEntry = projectPool[currentIndex];

    function showAnotherProject() {
        setCurrentIndex((index) => (index + 1) % projectPool.length);
    }

    if (!currentEntry) {
        return null;
    }

    return (
        <section className="message-panel">
            <div className="message-panel-heading">
                <p className="eyebrow">Interactividad</p>
                <h2>Proyectos del equipo</h2>
                <p className="message-output is-visible">
                    Mostramos el primer proyecto de cada integrante y el boton los recorre en orden para que puedas revisar el equipo completo.
                </p>
            </div>

            <div className="home-project-grid">
                <Link
                    key={currentEntry.id}
                    className="home-project-card"
                    to={`/integrantes/${currentEntry.member.id}`}
                >
                    <span
                        className="home-project-accent"
                        style={{ '--project-accent': currentEntry.member.accent }}
                        aria-hidden="true"
                    />
                    <p className="home-project-member">{currentEntry.member.name}</p>
                    <h3>{currentEntry.project.name}</h3>
                    <p className="home-project-description">{currentEntry.project.description}</p>
                    <p className="home-project-tech">{currentEntry.project.tech}</p>
                    <span className="home-project-link">Ir al perfil</span>
                </Link>
            </div>

            <button className="button button-primary" type="button" onClick={showAnotherProject}>
                Mostrar otro proyecto
            </button>
        </section>
    );
}

export default MessagePanel;