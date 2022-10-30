import React, { useContext } from 'react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import { Button } from '..';
import PaginationContext from '../../context/PaginationContext';
import DisplayNumber from './DisplayNumber';

function Pagination() {
  const { currentPage, displayPages, handleNext, handlePrev } =
    useContext(PaginationContext);

  return (
    <section className="flex items-center justify-center gap-4">
      <Button typeBtn="paginationBtn" onClick={() => handlePrev(currentPage)}>
        <RiArrowDropLeftLine />
      </Button>
      <div className="flex w-[390px] flex-wrap items-center justify-center gap-4 md:gap-6">
        {displayPages.map((num) =>
          currentPage === num ? (
            <DisplayNumber key={num} num={num} />
          ) : (
            <DisplayNumber key={num} disaplyType="NotCurrentNum" num={num} />
          )
        )}
      </div>
      <Button typeBtn="paginationBtn" onClick={() => handleNext(currentPage)}>
        <RiArrowDropRightLine />
      </Button>
    </section>
  );
}

export default Pagination;
