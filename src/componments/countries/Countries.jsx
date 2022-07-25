import React from 'react';
import CountryCard from './CountryCard';

function Countries({ countries, loading }) {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <section className="flex flex-wrap gap-8 justify-evenly">
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
