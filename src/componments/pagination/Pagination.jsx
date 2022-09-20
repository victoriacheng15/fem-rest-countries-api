import React, { useContext } from 'react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import Button from '../button/Button';
import CountriesContext from '../../context/CountriesContext';

function Pagination({ countriesPerPage, totalCountries }) {
  const {
    currentPage,
    setCurrentPage,
    startPage,
    setStartPage,
    endPage,
    setEndPage,
  } = useContext(CountriesContext);

  const totalPages = Math.ceil(totalCountries / countriesPerPage); // 21
  const pageNumbers = [...new Array(totalPages + 1).keys()].slice(1);
  const currentPages = pageNumbers.slice(startPage, endPage);

  const handleNext = (page) => {
    const FIVE = currentPages.length;
    const condition = page <= Math.floor(FIVE / 2);
    if (condition) {
      setCurrentPage(page + 1);
      setStartPage(0);
      setEndPage(5);
    } else {
      setCurrentPage(page >= totalPages ? totalPages : page + 1);
      setStartPage(page >= totalPages - 2 ? totalPages - 5 : startPage + 1);
      setEndPage(page >= totalPages ? totalPages : endPage + 1);
    }
  };

  const handlePrev = (page) => {
    const condition = page > totalPages - 2;
    if (condition) {
      setCurrentPage(page - 1);
      setStartPage(condition ? totalPages - 5 : startPage - 1);
      setEndPage(condition ? totalPages : endPage - 1);
    } else {
      setCurrentPage(page <= 1 ? 1 : page - 1);
      setStartPage(startPage <= 0 ? 0 : startPage - 1);
      setEndPage(endPage <= 5 ? 5 : endPage - 1);
    }
  };

  return (
    <section className="flex flex-wrap items-center justify-center gap-4">
      <Button onClick={() => handlePrev(currentPage)}>
        <RiArrowDropLeftLine />
      </Button>
      <div className="flex w-[460px] items-center justify-center gap-8">
        {currentPages.map((num) =>
          currentPage === num ? (
            <span
              className="grid aspect-square w-16 place-items-center border-4 border-lightGray-900 text-2xl font-bold dark:border-lightGray-700 dark:text-lightGray-800"
              key={num}
            >
              {num}
            </span>
          ) : (
            <span
              className="grid aspect-square w-14 place-items-center border-4 border-darkBlue-700 text-2xl font-bold dark:border-lightGray-900 dark:text-lightGray-700"
              key={num}
            >
              {num}
            </span>
          )
        )}
      </div>
      <Button onClick={() => handleNext(currentPage)}>
        <RiArrowDropRightLine />
      </Button>
    </section>
  );
}

export default Pagination;
