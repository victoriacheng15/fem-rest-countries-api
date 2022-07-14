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
  const handleSelect = (e) => setRegion(e.target.value);
  const handleInput = (e) => setInput(e.target.value);

  // total countries: 250

  const idxOfLastCountry = currentPage * countriesPerPage;
  const idxOfFirstCountry = idxOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(idxOfFirstCountry, idxOfLastCountry);

  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <main className="py-8 bg-lightGray-800 dark:bg-darkBlue-800">
      <div className="w-11/12 mx-auto max-w-7xl">
        <form className="flex flex-col gap-12 md:flex-row md:justify-between">
          <InputElement input={input} handleInput={handleInput} />
          <Dropdown region={region} handleSelect={handleSelect} />
        </form>
        <Countries countries={currentCountries} loading={loading} />
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={countries.length}
          paginate={paginate}
        />
      </div>
    </main>
  );
}

export default Main;
