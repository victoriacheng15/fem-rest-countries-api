import React, { useContext } from 'react';
import Form from '../form/Form';
import Countries from '../countries/Countries';
import Pagination from '../pagination/Pagination';
import CountriesContext from '../../context/CountriesContext';

function Main() {
  const { list, countriesPerPage, currentCountries } =
    useContext(CountriesContext);

  return (
    <main className="py-8 bg-lightGray-800 dark:bg-darkBlue-800">
      <div className="w-11/12 mx-auto max-w-7xl">
        <Form />
        <Countries countriesList={currentCountries} />
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={list.length}
        />
      </div>
    </main>
  );
}

export default Main;
