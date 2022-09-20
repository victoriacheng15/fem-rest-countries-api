import React, { useContext } from 'react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import Button from '../Button';
import PaginationContext from '../../context/PaginationContext';

function Pagination() {
  const { currentPage, displayPages, handleNext, handlePrev } =
    useContext(PaginationContext);

  return (
    <section className="flex flex-wrap items-center justify-center gap-4">
      <Button onClick={() => handlePrev(currentPage)}>
        <RiArrowDropLeftLine />
      </Button>
      <div className="flex w-[460px] items-center justify-center gap-8">
        {displayPages.map((num) =>
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
