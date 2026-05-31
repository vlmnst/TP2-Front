import { useEffect } from 'react';

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    if (currentIndex === null) return null;

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <button className="lightbox-close" onClick={onClose} aria-label="Cerrar">✕</button>

            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <div className="lightbox-main">
                    <button className="lightbox-nav lightbox-prev" onClick={onPrev} aria-label="Anterior">‹</button>

                    <div className="lightbox-img-wrapper">
                        <img
                            src={images[currentIndex].url}
                            alt={images[currentIndex].alt}
                            className="lightbox-img"
                        />
                    </div>

                    <button className="lightbox-nav lightbox-next" onClick={onNext} aria-label="Siguiente">›</button>
                </div>

                <div className="lightbox-footer">
                    <p className="lightbox-caption">{images[currentIndex].alt}</p>
                    <p className="lightbox-counter">{currentIndex + 1} / {images.length}</p>
                </div>
            </div>
        </div>
    );
}