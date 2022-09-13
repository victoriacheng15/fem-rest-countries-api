import React, { createContext, useState } from 'react';
import useFetchCountries from '../hook/useFetchCountries';

const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  const { countries, loading, list, setList } = useFetchCountries();
  // form
  const [searchTerm, setSearchTerm] = useState('');
  const [selectRegion, setSelectRegion] = useState('');
  // pagination
  const [countriesPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(5);

  const handleSearch = (searchValue) => {
    const value = searchValue.toLowerCase();
    setSearchTerm(value);
    const searchFiltered = countries.filter(({ name }) => {
      const countryName = name.official.toLowerCase();
      return countryName.includes(value);
    });
    setList(searchFiltered);
  };

  const handleSelect = (selectValue) => {
    setSelectRegion(selectValue);
    const selectFiltered = countries.filter(({ region }) =>
      region.includes(selectValue)
    );

    setList(selectFiltered);
  };

  const idxOfLastCountries = currentPage * countriesPerPage;
  const idxOfFirstCountries = idxOfLastCountries - countriesPerPage;
  const currentCountries = list.slice(idxOfFirstCountries, idxOfLastCountries);

  return (
    <CountriesContext.Provider
      value={{
        loading,
        list,
        searchTerm,
        selectRegion,
        handleSearch,
        handleSelect,
        currentPage,
        setCurrentPage,
        countriesPerPage,
        currentCountries,
        startPage,
        setStartPage,
        endPage,
        setEndPage,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export default CountriesContext;
