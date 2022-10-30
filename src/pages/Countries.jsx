import React, { useContext } from 'react';
import CountriesContext from '../context/CountriesContext';
import PaginationContext from '../context/PaginationContext';
import { CountryCard, Form, Pagination, Spinner } from '../components';

function Countries() {
  const { loading } = useContext(CountriesContext);
  const { currentCountries } = useContext(PaginationContext);

  if (loading) return <Spinner />;

  return (
    <>
      <Form />
      <section className="my-12 flex flex-wrap items-center justify-around gap-8">
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
