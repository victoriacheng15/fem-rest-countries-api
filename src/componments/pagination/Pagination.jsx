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
  const totalPage = Math.ceil(totalCountries / countriesPerPage); // 21
  const setPage = new Array(totalPage + 1).keys();
  const pageNumbers = [...setPage].slice(1);
  const currentPages = pageNumbers.slice(startPage, endPage);
  // console.log({ totalPage, currentPage, startPage, endPage });

  const handleNext = (page) => {
    const FIVE = currentPages.length;
    const condition = page <= Math.floor(FIVE / 2);
    if (condition) {
      setCurrentPage(page + 1);
      setStartPage(0);
      setEndPage(5);
    } else {
      setCurrentPage(page >= totalPage ? totalPage : page + 1);
      // setStartPage(page >= totalPage - 5 ? startPage + 1 : startPage + 1);
      // setEndPage(page >= totalPage - 5 ? endPage + 1 : endPage + 1);
      setStartPage(startPage + 1);
      setEndPage(endPage + 1);
    }
  };

  const handlePrev = (page) => {
    const condition = page > totalPage - 2;
    if (condition) {
      setCurrentPage(page - 1);
      setStartPage(condition ? totalPage - 5 : startPage - 1);
      setEndPage(condition ? totalPage : endPage - 1);
    } else {
      setCurrentPage(page <= 1 ? 1 : page - 1);
      setStartPage(startPage <= 0 ? 0 : startPage - 1);
      setEndPage(endPage <= 5 ? 5 : endPage - 1);
    }
  };

  return (
    <section className="flex flex-wrap items-center justify-center gap-4">
      <Button dataType="prev" onClick={() => handlePrev(currentPage)}>
        <RiArrowDropLeftLine />
      </Button>
      <div className="flex items-center gap-8">
        {currentPages.map((num) =>
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
      <Button dataType="next" onClick={() => handleNext(currentPage)}>
        <RiArrowDropRightLine />
      </Button>
    </section>
  );
}

export default Pagination;
