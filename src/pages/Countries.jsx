import React, { useContext } from 'react';
import CountryCard from '../componments/CountryCard';
import CountriesContext from '../context/CountriesContext';
import PaginationContext from '../context/PaginationContext';
import Spinner from '../componments/CountryCard/Spinner';
import Form from '../componments/Form';
import Pagination from '../componments/Pagination';

function Countries() {
  const { loading } = useContext(CountriesContext);
  const { currentCountries } = useContext(PaginationContext);

  if (loading) return <Spinner />;

  return (
    <>
      <Form />
      <section className="my-12 flex h-max flex-wrap items-center justify-around gap-8">
        {currentCountries.map(
          ({ name, capital, region, flags, population, cca3 }) => (
            <CountryCard
              key={name.common}
              alphaCode={cca3}
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
