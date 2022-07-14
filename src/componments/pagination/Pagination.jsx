import React from 'react';

function Pagination({ countriesPerPage, totalCountries, paginate }) {
  const getPages = Math.ceil(totalCountries / countriesPerPage);
  const setPage = new Array(getPages + 1).keys();
  const pageNumbers = [...setPage].slice(1);

  return (
    <section className="flex flex-wrap items-center justify-center gap-2">
      {pageNumbers.map((num) => (
        <button
          className="w-10 p-2 text-lg font-bold rounded-full shadow-lg aspect-square bg-lightGray-700 text-darkBlue-900 dark:bg-darkBlue-900 dark:text-lightGray-800 shadow-gray-700"
          type="button"
          key={num}
          onClick={() => paginate(num)}
        >
          {num}
        </button>
      ))}
    </section>
  );
}

export default Pagination;
