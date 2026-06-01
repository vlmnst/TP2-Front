import { useEffect } from 'react';

const MET_PLACEHOLDER_IMAGE = '/img/met-placeholder.svg';

function DetailRow({ label, value }) {
    if (!value) {
        return null;
    }

    return (
        <div className="met-modal-row">
            <dt>{label}</dt>
            <dd>{value}</dd>
        </div>
    );
}

function MetArtworkModal({ artwork, isLoading, error, onClose }) {
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const hasArtworkImage = Boolean(artwork?.primaryImageSmall || artwork?.primaryImage);
    const imageSrc = artwork?.primaryImageSmall || artwork?.primaryImage || MET_PLACEHOLDER_IMAGE;
    const imageAlt = hasArtworkImage
        ? artwork?.title
        : `Placeholder de archivo para ${artwork?.title || 'obra sin imagen disponible'}`;

    return (
        <div className="lightbox-overlay met-modal-overlay" onClick={onClose}>
            <button className="lightbox-close" onClick={onClose} aria-label="Cerrar">
                ✕
            </button>

            <div className="lightbox-content met-modal" onClick={(event) => event.stopPropagation()}>
                {isLoading ? (
                    <div className="met-modal-state">
                        <p className="eyebrow">Consultando obra</p>
                        <h3>Cargando ficha del museo...</h3>
                    </div>
                ) : error ? (
                    <div className="met-modal-state met-modal-state-error">
                        <p className="eyebrow">No disponible</p>
                        <h3>No se pudo cargar la obra</h3>
                        <p>{error}</p>
                    </div>
                ) : artwork ? (
                    <>
                        <div className="met-modal-media">
                            <img
                                className={`lightbox-img met-modal-img ${hasArtworkImage ? '' : 'is-placeholder'}`}
                                src={imageSrc}
                                alt={imageAlt}
                            />
                        </div>

                        <div className="met-modal-copy">
                            <p className="eyebrow">Archivo MET #{artwork.objectID}</p>
                            <h3>{artwork.title}</h3>
                            <p className="met-modal-summary">
                                {artwork.artistDisplayName || 'Autor no especificado'}
                                {artwork.objectDate ? ` · ${artwork.objectDate}` : ''}
                            </p>

                            <dl className="met-modal-details">
                                <DetailRow label="Artista" value={artwork.artistDisplayName} />
                                <DetailRow label="Departamento" value={artwork.department} />
                                <DetailRow label="Fecha" value={artwork.objectDate} />
                                <DetailRow label="Tecnica" value={artwork.medium} />
                                <DetailRow label="Clasificacion" value={artwork.classification} />
                                <DetailRow label="Cultura" value={artwork.culture} />
                                <DetailRow label="Pais" value={artwork.country} />
                            </dl>

                            {artwork.objectURL ? (
                                <a
                                    className="button button-primary met-modal-link"
                                    href={artwork.objectURL}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Ver ficha original del MET
                                </a>
                            ) : null}
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default MetArtworkModal;