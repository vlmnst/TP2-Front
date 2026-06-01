import { FaCompactDisc, FaFilm } from 'react-icons/fa';

function FlipLabel({ label }) {
    const normalized = label.toLowerCase();
    const Icon = normalized.includes('pelicula')
        ? FaFilm
        : normalized.includes('disco')
          ? FaCompactDisc
          : null;

    return (
        <p className="flip-label">
            {Icon ? <Icon className="flip-label-icon" aria-hidden="true" /> : null}
            <span>{label}</span>
        </p>
    );
}

function SectionFlip({ section }) {
    const variant = section.variant || 'rotate-y';
    const cardClass = variant === 'rotate-y' ? 'flip-card' : `flip-card flip-card--${variant}`;
    const accent = section.accent;

    return (
        <section
            className="info-section"
            style={accent ? { '--flip-accent': accent } : undefined}
        >
            <h3>{section.title}</h3>
            <div className="flip-grid">
                {section.pairs.map((pair, index) => (
                    <div
                        key={pair.front}
                        className={cardClass}
                        style={{ '--animation-delay': `${index * 80}ms` }}
                    >
                        <div className="flip-inner">
                            <div className="flip-face flip-front">
                                <FlipLabel label={section.frontLabel || 'Frente'} />
                                <p className="flip-value">{pair.front}</p>
                            </div>
                            <div className="flip-face flip-back">
                                <FlipLabel label={section.backLabel || 'Dorso'} />
                                <p className="flip-value">{pair.back}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SectionFlip;
