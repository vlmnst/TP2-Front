function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) {
        return null;
    }

    return (
        <nav className="pagination" aria-label="Paginacion de resultados">
            <button
                type="button"
                className="pagination-button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Anterior
            </button>

            <p className="pagination-status">
                Pagina <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
            </p>

            <button
                type="button"
                className="pagination-button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Siguiente
            </button>
        </nav>
    );
}

export default Pagination;