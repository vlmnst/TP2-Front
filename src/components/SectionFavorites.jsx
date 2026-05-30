import { useState } from 'react';

function FavoritesStage({ category, item, index, total }) {
    if (!item) return null;

    return (
        <article className="favorites-stage">
            <div className="favorites-stage-visual">
                <span className="favorites-stage-orbit" />
                <span className="favorites-stage-orbit-label">{category.visualLabel}</span>
            </div>
            <div className="favorites-stage-copy">
                <div className="favorites-stage-topline">
                    <span className="favorites-stage-badge">{category.badge}</span>
                    <p className="favorites-stage-counter">
                        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </p>
                </div>
                <p className="favorites-stage-status">{category.stageLabel}</p>
                <h4 className="favorites-stage-title">{item.name}</h4>
                <p className="favorites-stage-meta">{item.meta}</p>
                <p className="favorites-stage-note">{item.note}</p>
            </div>
        </article>
    );
}

function SectionFavorites({ section }) {
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeItem, setActiveItem] = useState(0);

    const category = section.categories[activeCategory];
    const item = category?.items[activeItem];

    if (!section.categories || section.categories.length === 0) {
        return (
            <section className="info-section favorites-section">
                <h3>{section.title || 'Favoritos'}</h3>
            </section>
        );
    }

    return (
        <section className="info-section favorites-section">
            <div className="favorites-heading">
                <h3>{section.title}</h3>
                {section.text && <p className="section-copy">{section.text}</p>}
            </div>

            <div className="favorites-tabs">
                {section.categories.map((cat, i) => (
                    <button
                        key={cat.label}
                        className={`favorites-tab${i === activeCategory ? ' is-active' : ''}`}
                        type="button"
                        aria-pressed={i === activeCategory}
                        onClick={() => { setActiveCategory(i); setActiveItem(0); }}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <FavoritesStage
                category={category}
                item={item}
                index={activeItem}
                total={category.items.length}
            />

            <div className="favorites-tracklist">
                {category.items.map((item, i) => (
                    <button
                        key={item.name}
                        className={`favorites-track${i === activeItem ? ' is-active' : ''}`}
                        type="button"
                        aria-pressed={i === activeItem}
                        onClick={() => setActiveItem(i)}
                        onMouseEnter={() => setActiveItem(i)}
                        onFocus={() => setActiveItem(i)}
                    >
                        <span className="favorites-track-index">
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="favorites-track-copy">
                            <strong className="favorites-track-name">{item.name}</strong>
                            <span className="favorites-track-meta">{item.meta}</span>
                        </span>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default SectionFavorites;