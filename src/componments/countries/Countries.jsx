import React from 'react';
import CountryCard from './CountryCard';

function Countries({ countries, loading }) {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <section className="grid items-center justify-center py-12 justify-items-center gap-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map(({ name, capital, region, flags, population }) => (
        <CountryCard
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
