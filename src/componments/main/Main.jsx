import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from '../form/Form';
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
    <main className="py-8 bg-lightGray-800 dark:bg-darkBlue-800">
      <div className="w-11/12 mx-auto max-w-7xl">
        <Form
          searchValue={searchTerm}
          onChangeSearch={(e) => handleSearch(e.target.value)}
          optionValue={selectRegion}
          onChangeSelect={(e) => handleSelect(e.target.value)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Countries countries={currentCountries} loading={loading} />
            }
          />
          {/* <Route path=":name" element={<Country />} /> */}
        </Routes>
        {/* <Countries countries={currentCountries} loading={loading} /> */}
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
