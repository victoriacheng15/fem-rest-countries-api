import React from 'react';
import { useFetchCountries } from '../../hook/useFetchApi';

function Countries() {
  const { countries, fetchError } = useFetchCountries();
  return (
    <section>
      {countries.map(({ name, capital, region, flags, population }) => (
        <article key={name.common}>
          <div>
            <img src={flags.png} alt={name.official} />
          </div>
          <h2>{name.common}</h2>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Captial: {capital}</p>
        </article>
      ))}
    </section>
  );
}

export default Countries;
