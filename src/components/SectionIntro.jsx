function SectionIntro({ section }) {
    return (
        <section className="info-section info-section-intro">
            <h3>{section.title}</h3>
            <p className="section-copy">{section.text}</p>
        </section>
    );
}

export default SectionIntro;