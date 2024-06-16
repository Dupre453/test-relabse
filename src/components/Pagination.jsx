import React from 'react';

const Pagination = ({currentPage,totalPages, handlePreviousPage, handleNextPage}) => {
    return (
        <div>
            <div className="flex justify-between">
                {currentPage > 1 && (
                    <button
                        className='bg-white text-neutral-700 font-bold border-solid border-2 border-gray-200 shadow-md rounded-2xl px-2 py-1.5 '
                        onClick={handlePreviousPage}>
                        Предыдущая
                    </button>
                )}
                {currentPage < totalPages && (
                    <button
                        className='bg-white text-neutral-700 font-bold border-solid border-2 border-gray-200 shadow-md rounded-2xl px-2 py-1.5 '
                        onClick={handleNextPage}>
                        Следующая
                    </button>
                )}
            </div>
        </div>
    );
};

export default Pagination;