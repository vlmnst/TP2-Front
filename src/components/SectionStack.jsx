function SectionStack({ section }) {
    return (
        <section className="info-section">
            <h3>{section.title}</h3>
            <div className="stack-grid">
                {section.groups.map((group) => (
                    <article
                        key={group.name}
                        className={`stack-card${group.featured ? ' stack-card-featured' : ''}`}
                    >
                        <h4>{group.name}</h4>
                        {group.description && <p className="stack-copy">{group.description}</p>}
                        <ul className="tag-list">
                            {group.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default SectionStack;