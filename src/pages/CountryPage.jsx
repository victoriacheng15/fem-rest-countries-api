import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetchCountry from '../hook/useFetchCountry';

function CountryPage() {
  const { id } = useParams();
  const { country, loading } = useFetchCountry(id);
  // console.log({ id, country, loading });
  return (
    <>
      <Link to="/">Back</Link>
      <section>
        {country.map(
          ({
            flags,
            name,
            population,
            region,
            subregion,
            capital,
            tld,
            currencies,
            languages,
            borders,
          }) => (
            <article key={name.common}>
              <img src={flags.png} alt={name.common} />
              <h2>{name.common}</h2>
              <div>
                <p>Population: {population.toLocaleString()}</p>
                <p>Region: {region}</p>
                <p>Sub Region: {subregion}</p>
                <p>Capital: {capital}</p>
              </div>
              <div>
                <p>Top LeveL domain: {tld}</p>
                <p>currencies: {Object.keys(currencies)}</p>
                <p>languages: {languages.name}</p>
              </div>
              <div>
                <h3>Border Countries:</h3>
                <p>{borders.map((item) => item)}</p>
              </div>
            </article>
          )
        )}
      </section>
    </>
  );
}

export default CountryPage;
