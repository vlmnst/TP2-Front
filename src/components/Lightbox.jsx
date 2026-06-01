import { useCallback, useEffect, useState } from 'react';

const ZOOM_STEP = 0.25;
const MIN_ZOOM = 1;
const MAX_ZOOM = 3;

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        setZoom(1);
    }, [currentIndex]);

    const handleZoomIn = useCallback(() => {
        setZoom((current) => Math.min(MAX_ZOOM, +(current + ZOOM_STEP).toFixed(2)));
    }, []);

    const handleZoomOut = useCallback(() => {
        setZoom((current) => Math.max(MIN_ZOOM, +(current - ZOOM_STEP).toFixed(2)));
    }, []);

    const handleResetZoom = useCallback(() => {
        setZoom(1);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === '+' || e.key === '=') {
                e.preventDefault();
                handleZoomIn();
            }
            if (e.key === '-') {
                e.preventDefault();
                handleZoomOut();
            }
            if (e.key.toLowerCase() === 'r') {
                e.preventDefault();
                handleResetZoom();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleZoomIn, handleZoomOut, handleResetZoom, onClose, onNext, onPrev]);

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
                            style={{ '--zoom-level': zoom }}
                        />
                    </div>

                    <button className="lightbox-nav lightbox-next" onClick={onNext} aria-label="Siguiente">›</button>
                </div>

                <div className="lightbox-zoom-controls">
                    <button
                        type="button"
                        className="lightbox-zoom-btn"
                        onClick={handleZoomOut}
                        aria-label="Reducir zoom"
                        disabled={zoom <= MIN_ZOOM}
                    >
                        −
                    </button>
                    <span className="lightbox-zoom-label">{zoom.toFixed(2)}x</span>
                    <button
                        type="button"
                        className="lightbox-zoom-btn"
                        onClick={handleZoomIn}
                        aria-label="Aumentar zoom"
                        disabled={zoom >= MAX_ZOOM}
                    >
                        +
                    </button>
                    <button
                        type="button"
                        className="lightbox-zoom-reset"
                        onClick={handleResetZoom}
                        aria-label="Restablecer zoom"
                    >
                        Rest.
                    </button>
                </div>

                <div className="lightbox-footer">
                    <p className="lightbox-caption">{images[currentIndex].alt}</p>
                    <p className="lightbox-counter">{currentIndex + 1} / {images.length}</p>
                </div>
            </div>
        </div>
    );
}