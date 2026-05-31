import { techIcons } from '../data/techIcons';

function normalizeKey(str) {
    return str
        .toLowerCase()
        .replace(/\./g, '')
        .replace(/\s/g, '');
}

function TechStack({ items = [] }) {
    return (
        <section className="info-section techstack">
            <h3>Tech Stack</h3>
            <ul className="tech-list">
                {items.map((item) => {
                    const key = normalizeKey(item);
                    const Icon = techIcons[key];
                    return (
                        <li key={item} className="tech-item">
                            {Icon && <Icon />}
                            <span className="tech-label">{item}</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default TechStack;