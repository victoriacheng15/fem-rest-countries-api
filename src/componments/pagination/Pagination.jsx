import React, { useState } from 'react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import Button from '../button/Button';

function Pagination({
  countriesPerPage,
  totalCountries,
  currentPage,
  setCurrentPage,
}) {
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(5);
  const getPages = Math.ceil(totalCountries / countriesPerPage);
  const setPage = new Array(getPages + 1).keys();
  const pageNumbers = [...setPage].slice(1);

  const total = pageNumbers.length;

  const handleNext = () => {
    const condition = currentPage <= Math.floor(5 / 2);
    if (condition) {
      setCurrentPage(currentPage + 1);
      setStartPage(0);
      setEndPage(5);
    } else {
      setCurrentPage(currentPage >= total ? total : currentPage + 1);
      setStartPage(currentPage > 18 ? 16 : startPage + 1);
      setEndPage(currentPage > 18 ? total : endPage + 1);
    }
  };

  const handlePrev = () => {
    const condition = currentPage > 19;
    if (condition) {
      setCurrentPage(currentPage - 1);
      setStartPage(condition ? 16 : startPage - 1);
      setEndPage(condition ? total : endPage - 1);
    } else {
      setCurrentPage(currentPage <= 1 ? 1 : currentPage - 1);
      setStartPage(startPage <= 0 ? 0 : startPage - 1);
      setEndPage(endPage <= 5 ? 5 : endPage - 1);
    }
  };

  return (
    <section className="flex flex-wrap items-center justify-center gap-4">
      <Button dataType="prev" onClick={handlePrev}>
        <RiArrowDropLeftLine />
      </Button>
      <div className="flex items-center gap-8">
        {pageNumbers.slice(startPage, endPage).map((num) =>
          currentPage === num ? (
            <span
              className="grid w-16 text-2xl font-bold border-4 aspect-square dark:text-lightGray-800 border-lightGray-900 place-items-center dark:border-lightGray-700"
              key={num}
            >
              {num}
            </span>
          ) : (
            <span
              className="grid text-2xl font-bold border-4 w-14 aspect-square dark:text-lightGray-700 border-darkBlue-700 place-items-center dark:border-lightGray-900"
              key={num}
            >
              {num}
            </span>
          )
        )}
      </div>
      <Button dataType="next" onClick={handleNext}>
        <RiArrowDropRightLine />
      </Button>
    </section>
  );
}

export default Pagination;
