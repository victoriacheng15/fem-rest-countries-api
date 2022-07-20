import React, { useState } from 'react';
import InputElement from '../formElements/InputElement';
import Dropdown from '../formElements/Dropdown';
import Countries from '../countries/Countries';
import Pagination from '../pagination/Pagination';
import useFetchCountries from '../../hook/useFetchApi';

function Main() {
  const { countries, loading } = useFetchCountries();
  const [countriesPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [region, setRegion] = useState('default');
  const [input, setInput] = useState('');
  const handleSelect = (e) => {
    console.log(e.target.value);
    setRegion(e.target.value);
  };
  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  // total countries: 250
  const idxOfLastCountry = currentPage * countriesPerPage;
  const idxOfFirstCountry = idxOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(idxOfFirstCountry, idxOfLastCountry);

  return (
    <main className="py-8 bg-lightGray-800 dark:bg-darkBlue-800">
      <div className="w-11/12 mx-auto max-w-7xl">
        <form className="flex flex-col gap-12 md:flex-row md:justify-between">
          <InputElement input={input} onChange={handleInput} />
          <Dropdown region={region} onChange={handleSelect} />
        </form>
        <Countries countries={currentCountries} loading={loading} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          countriesPerPage={countriesPerPage}
          totalCountries={countries.length}
        />
      </div>
    </main>
  );
}

export default Main;
