import React, { createContext, useState, useContext } from 'react';
import useFetchCountries from '../hook/useFetchCountries';

const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  const { countries, loading, error, list, setList } = useFetchCountries();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectRegion, setSelectRegion] = useState('');

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

  return (
    <CountriesContext.Provider
      value={{
        loading,
        list,
        error,
        searchTerm,
        selectRegion,
        handleSearch,
        handleSelect,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export function useCountriesContext() {
  return useContext(CountriesContext);
}
