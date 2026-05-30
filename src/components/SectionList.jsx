function SectionList({ section }) {
    return (
        <section className="info-section">
            <h3>{section.title}</h3>
            <ul className="tag-list">
                {section.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </section>
    );
}

export default SectionList;