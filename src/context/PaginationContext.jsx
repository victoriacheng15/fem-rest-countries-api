import React, { createContext, useState } from 'react';
import useFetchCountries from '../hook/useFetchCountries';

const PaginationContext = createContext();

export function PaginationProvider({ children }) {
  const { list } = useFetchCountries();

  const [countriesPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(5);

  const idxOfLastCountries = currentPage * countriesPerPage;
  const idxOfFirstCountries = idxOfLastCountries - countriesPerPage;
  const currentCountries = list.slice(idxOfFirstCountries, idxOfLastCountries);

  return (
    <PaginationContext.Provider
      value={{
        countriesPerPage,
        currentPage,
        setCurrentPage,
        startPage,
        setStartPage,
        endPage,
        setEndPage,
        currentCountries,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export default PaginationContext;
