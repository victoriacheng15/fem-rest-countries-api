import React, { useState } from 'react';
import InputElement from '../formElements/InputElement';
import Dropdown from '../formElements/Dropdown';
import Countries from '../countries/Countries';
import Pagination from '../pagination/Pagination';
import useFetchCountries from '../../hook/useFetchApi';

function Main() {
  const { countries, loading, list, setList } = useFetchCountries();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectRegion, setSelectRegion] = useState('');
  const [countriesPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (searchValue) => {
    const value = searchValue.toLowerCase();
    setSearchTerm(value);
    const searchFiltered = countries.filter((country) => {
      const name = country.name.official.toLowerCase();
      return name.includes(value);
    });
    setList(searchFiltered);
  };

  const handleSelect = (selectValue) => {
    setSelectRegion(selectValue);
    const selectFiltered = countries.filter((country) => {
      const { region } = country;
      return region.includes(selectValue);
    });

    setList(selectFiltered);
  };

  const idxOfLastCountries = currentPage * countriesPerPage;
  const idxOfFirstCountries = idxOfLastCountries - countriesPerPage;
  const currentCountries = list.slice(idxOfFirstCountries, idxOfLastCountries);

  return (
    <main className="py-8 bg-lightGray-800 dark:bg-darkBlue-800">
      <div className="w-11/12 mx-auto max-w-7xl">
        <form className="flex flex-col gap-12 md:flex-row md:justify-between">
          <InputElement
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Dropdown
            optionValue={selectRegion}
            onChange={(e) => handleSelect(e.target.value)}
          />
        </form>
        <Countries countries={currentCountries} loading={loading} />
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={list.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </main>
  );
}

export default Main;
