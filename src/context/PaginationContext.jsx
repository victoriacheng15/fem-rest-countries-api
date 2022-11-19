import React, { createContext, useState, useContext } from 'react';
import { useCountriesContext } from './CountriesContext';

const PaginationContext = createContext();

export function PaginationProvider({ children }) {
  const { list } = useCountriesContext();

  const [countriesPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(5);

  const idxOfLastCountries = currentPage * countriesPerPage;
  const idxOfFirstCountries = idxOfLastCountries - countriesPerPage;
  const currentCountries = list.slice(idxOfFirstCountries, idxOfLastCountries);

  const totalPages = Math.ceil(list.length / countriesPerPage); // 21
  const pageNumbers = [...new Array(totalPages + 1).keys()].slice(1);
  const displayPages = pageNumbers.slice(startPage, endPage);

  const handleNext = (page) => {
    const FIVE = displayPages.length;
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
    <PaginationContext.Provider
      value={{
        countriesPerPage,
        currentPage,
        displayPages,
        currentCountries,
        handleNext,
        handlePrev,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export function usePaginationContext() {
  return useContext(PaginationContext);
}

export default PaginationContext;
