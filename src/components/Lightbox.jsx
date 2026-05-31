import { useEffect } from 'react';

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
    useEffect(() => {
        function handleKey(e) {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        }
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose, onPrev, onNext]);

    const image = images[currentIndex];

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <button className="lightbox-close" onClick={onClose} aria-label="Cerrar">✕</button>

            <button
                className="lightbox-nav lightbox-prev"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Anterior"
            >
                ‹
            </button>

            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img src={image.url} alt={image.alt} className="lightbox-img" />
                <p className="lightbox-caption">{image.alt}</p>
                <p className="lightbox-counter">{currentIndex + 1} / {images.length}</p>
            </div>

            <button
                className="lightbox-nav lightbox-next"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Siguiente"
            >
                ›
            </button>
        </div>
    );
}

export default Lightbox;