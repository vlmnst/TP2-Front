import { useState, useCallback } from 'react';
import Lightbox from '../components/Lightbox';

export default function GalleryPage() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', alt: 'Tecnología' },
    { id: 2, url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80', alt: 'Naturaleza' },
    { id: 3, url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80', alt: 'Deportes' },
    { id: 4, url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80', alt: 'Series' },
    { id: 5, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', alt: 'Comida' },
    { id: 6, url: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80', alt: 'Videojuegos' },
    { id: 7, url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80', alt: 'Tecnología' },
    { id: 8, url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80', alt: 'Naturaleza' }
    ];

    const closeLightbox = useCallback(() => setSelectedIndex(null), []);

    const nextImage = useCallback(() => {
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    const prevImage = useCallback(() => {
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    return (
        <div className="container page-stack">
            <section className="section-heading">
                <p className="eyebrow">Galería</p>
                <h2>Imágenes del proyecto</h2>
            </section>

            <div className="gallery-grid">
                {images.map((img, index) => (
                    <button
                        key={img.id}
                        className="gallery-item"
                        onClick={() => setSelectedIndex(index)}
                        aria-label={`Ver ${img.alt}`}
                    >
                        <img src={img.url} alt={img.alt} loading="lazy" className="gallery-img" />
                        <div className="gallery-overlay">
                            <span className="gallery-overlay-label">🔍 {img.alt}</span>
                        </div>
                    </button>
                ))}
            </div>

            {selectedIndex !== null && (
                <Lightbox
                    images={images}
                    currentIndex={selectedIndex}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}
        </div>
    );
}