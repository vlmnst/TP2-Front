import { useState } from 'react';

function SectionProjects({ section }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const total = section.items.length;
    const project = section.items[activeIndex];

    function handlePrev() {
        setActiveIndex((current) => (current - 1 + total) % total);
    }

    function handleNext() {
        setActiveIndex((current) => (current + 1) % total);
    }

    function handleSelect(index) {
        setActiveIndex(index);
    }

    return (
        <section className="info-section section-projects"
            style={{ '--project-accent': project.accent || '#363d3b' }}>
            <div className="section-header-row">
                <h3>{section.title}</h3>
                <div className="carousel-controls">
                    <button
                        type="button"
                        className="carousel-button"
                        onClick={handlePrev}
                        aria-label="Proyecto anterior"
                    >
                        Anterior
                    </button>
                    <span className="carousel-position">
                        {activeIndex + 1}/{total}
                    </span>
                    <button
                        type="button"
                        className="carousel-button"
                        onClick={handleNext}
                        aria-label="Siguiente proyecto"
                    >
                        Siguiente
                    </button>
                </div>
            </div>

            <article key={activeIndex} className="project-card">
                
                {/* solo si existe imagen, muestra este div */}
                {project.image && (
                    <div className="project-card-media">
                        <img src={project.image} alt={`Mockup de ${project.name}`} />
                    </div>
                )}

                <div className="project-card-body" aria-live="polite">
                    <p className="project-card-label">Proyecto</p>
                    <p className="project-card-title">{project.name}</p>
                    <p className="project-card-description">{project.description}</p>
                    <span className="project-card-tech">{project.tech}</span>
                </div>
            </article>

            <div className="project-dots" role="tablist" aria-label="Seleccion de proyecto">
                {section.items.map((item, index) => (
                    <button
                        key={item.name}
                        type="button"
                        className={`project-dot${index === activeIndex ? ' is-active' : ''}`}
                        aria-label={`Ver ${item.name}`}
                        aria-selected={index === activeIndex}
                        onClick={() => handleSelect(index)}
                    />
                ))}
            </div>
        </section>
    );
}

export default SectionProjects;