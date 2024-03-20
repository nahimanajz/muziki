const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    className={`${
                        currentPage === i ? "bg-blue-500" : "bg-gray-200"
                    } inline-block mx-1 px-3 py-2 rounded cursor-pointer`}
                >
                    <button onClick={() => onPageChange(i)}>{i}</button>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <nav className="mt-4" aria-label="Pagination">
            <ul className="inline-flex float-right">
                <li
                    className={`${
                        currentPage === 1
                            ? "pointer-events-none"
                            : "cursor-pointer"
                    } inline-block mx-1 px-3 py-2 rounded bg-gray-200`}
                >
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                {renderPageNumbers()}
                <li
                    className={`${
                        currentPage === totalPages
                            ? "pointer-events-none"
                            : "cursor-pointer"
                    } inline-block mx-1 px-3 py-2 rounded bg-gray-200`}
                >
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
