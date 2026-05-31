import ProgressBar from './ProgressBar';

function SectionProgress({ section }) {
    return (
        <section className="info-section info-section-progress">
            <h3>{section.title}</h3>
            <div className="progress-list">
                {section.items.map((item) => (
                    <ProgressBar
                        key={item.label}
                        label={item.label}
                        value={item.value}
                        accent={section.accent}
                    />
                ))}
            </div>
        </section>
    );
}

export default SectionProgress;
