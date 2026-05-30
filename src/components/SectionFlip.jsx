function SectionFlip({ section }) {
    return (
        <section className="info-section">
            <h3>{section.title}</h3>
            <div className="flip-grid">
                {section.pairs.map((pair) => (
                    <div key={pair.front} className="flip-card">
                        <div className="flip-inner">
                            <div className="flip-face flip-front">
                                <p className="flip-label">{section.frontLabel || 'Frente'}</p>
                                <p className="flip-value">{pair.front}</p>
                            </div>
                            <div className="flip-face flip-back">
                                <p className="flip-label">{section.backLabel || 'Dorso'}</p>
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