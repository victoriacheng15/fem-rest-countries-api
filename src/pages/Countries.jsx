import React, { useContext } from 'react';
import CountryCard from '../componments/CountryCard';
import CountriesContext from '../context/CountriesContext';
import Pagination from '../componments/Pagination';
import Spinner from '../componments/CountryCard/Spinner';
import Form from '../componments/Form';
import PaginationContext from '../context/PaginationContext';

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
              dataName={cca3}
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
