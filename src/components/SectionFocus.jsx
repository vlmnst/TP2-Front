function SectionFocus({ section }) {
    return (
        <section className="info-section">
            <h3>{section.title}</h3>
            <div className="focus-grid">
                {section.items.map((item) => (
                    <article key={item.name} className="focus-card">
                        <h4>{item.name}</h4>
                        <p className="section-copy">{item.text}</p>
                        {item.puntaje && <p>{item.puntaje}</p>}
                    </article>
                ))}
            </div>
        </section>
    );
}

export default SectionFocus;