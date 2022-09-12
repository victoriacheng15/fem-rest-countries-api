import React, { useContext } from 'react';
import CountryCard from './CountryCard';
import CountriesContext from '../../context/CountriesContext';

function Countries({ countriesList }) {
  const { loading } = useContext(CountriesContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="w-20 border-8 rounded-full border-darkBlue-700 border-t-lightGray-900 aspect-square spinner-border animate-spin dark:border-lightGray-900 dark:border-t-darkBlue-800"
          role="status"
        >
          <span className="invisible">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <section className="flex flex-wrap items-center justify-around gap-8 my-12 h-max">
      {countriesList.map(({ name, capital, region, flags, population }) => (
        <CountryCard
          key={name.common}
          name={name.official}
          countryCaptial={capital || 'N/A'}
          region={region}
          flags={flags.png}
          alt={name.official}
          population={population}
        />
      ))}
    </section>
  );
}

export default Countries;
