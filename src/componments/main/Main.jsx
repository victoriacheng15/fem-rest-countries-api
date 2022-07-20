import React, { useState } from 'react';
import InputElement from '../formElements/InputElement';
import Dropdown from '../formElements/Dropdown';
import Countries from '../countries/Countries';
import Pagination from '../pagination/Pagination';
import useFetchCountries from '../../hook/useFetchApi';

function Main() {
  const { countries, loading } = useFetchCountries();
  const [input, setInput] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [region, setRegion] = useState('');
  const [countriesPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const selectRegion = (value) => {
    setRegion(value);
    const regionFilter = countries.filter((country) => {
      const getRegion = Object.values(country.region).join('');
      return getRegion.includes(region);
    });
    setFilteredList(regionFilter);
    // need to see why this doesnt work
  };

  const searchField = (value) => {
    setInput(value);
    if (input !== '') {
      const filtered = countries.filter((country) => {
        const officialName = Object.values(country.name.official).join('');
        return officialName.toLowerCase().includes(input);
      });
      setFilteredList(filtered);
    }
  };

  // total countries: 250
  const idxOfLastCountry = currentPage * countriesPerPage;
  const idxOfFirstCountry = idxOfLastCountry - countriesPerPage;
  const currentCountries = (list) =>
    list.slice(idxOfFirstCountry, idxOfLastCountry);

  // const currentCountries = filteredList.slice(idxOfFirstCountry, idxOfLastCountry);

  return (
    <main className="py-8 bg-lightGray-800 dark:bg-darkBlue-800">
      <div className="w-11/12 mx-auto max-w-7xl">
        <form className="flex flex-col gap-12 md:flex-row md:justify-between">
          <InputElement
            value={input}
            onChange={(e) => searchField(e.target.value)}
          />
          <Dropdown
            value={region}
            onChange={(e) => selectRegion(e.target.value)}
          />
        </form>
        <Countries
          countries={
            input.length > 1
              ? currentCountries(filteredList)
              : currentCountries(countries)
          }
          loading={loading}
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          countriesPerPage={countriesPerPage}
          totalCountries={filteredList.length}
        />
      </div>
    </main>
  );
}

export default Main;
