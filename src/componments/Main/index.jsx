import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Countries from '../../pages/Countries';
// import CountriesContext from '../../context/CountriesContext';
import CountryPage from '../../pages/CountryPage';

function Main() {
  // const { currentCountries } = useContext(CountriesContext);

  return (
    <main className="min-h-screen bg-lightGray-800 py-12 dark:bg-darkBlue-800">
      <div className="mx-auto w-11/12 max-w-7xl">
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:code" element={<CountryPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
