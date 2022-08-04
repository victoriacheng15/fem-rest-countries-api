import React from 'react';
import CountryCard from './CountryCard';

function Countries({ countries, loading }) {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <section className="flex flex-wrap items-center justify-around gap-8 my-12 h-max">
      {countries.map(({ name, capital, region, flags, population }) => (
        <CountryCard
          key={name.common}
          name={name.official}
          countryCaptial={capital}
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
