import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Countries from '../../pages/Countries';
import CountriesContext from '../../context/CountriesContext';
import CountryPage from '../../pages/CountryPage';

function Main() {
  const { currentCountries } = useContext(CountriesContext);

  return (
    <main className="py-8 bg-lightGray-800 dark:bg-darkBlue-800">
      <div className="w-11/12 mx-auto max-w-7xl">
        <Routes>
          <Route
            path="/"
            element={<Countries countriesList={currentCountries} />}
          />
          <Route path="/country/:name" element={<CountryPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
