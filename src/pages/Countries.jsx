import React, { useContext } from 'react';
import { useCountriesContext } from '../context/CountriesContext';
import { usePaginationContext } from '../context/PaginationContext';
import { CountryCard, Form, Pagination, Spinner } from '../components';
import { ErrorPage } from '.';

function Countries() {
  const { loading, error } = useCountriesContext();
  const { currentCountries } = usePaginationContext();

  return (
    <>
      <Form />
      <section className="my-12 flex flex-wrap items-center justify-around gap-8">
        {error && <ErrorPage />}
        {loading && <Spinner />}
        {currentCountries.map(
          ({ name, capital, region, flags, population, cca2 }) => (
            <CountryCard
              key={name.common}
              alphaCode={cca2}
              name={name.official}
              countryCaptial={capital || 'N/A'}
              region={region}
              flags={flags.png}
              alt={name.official}
              population={population}
            />
          )
        )}
      </section>
      <Pagination />
    </>
  );
}

export default Countries;
