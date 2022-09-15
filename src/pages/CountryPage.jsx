import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetchCountry from '../hook/useFetchCountry';
import Spinner from '../componments/countries/Spinner';

function CountryPage() {
  const { code } = useParams();
  const { country, loading } = useFetchCountry(code);
  const getInput = (input) => Object.values(input);

  if (loading) return <Spinner />;

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
            borders,
            languages,
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
                <p>Top LeveL domain: {tld.map((elm) => elm).join(', ')}</p>
                <p>
                  currencies:{' '}
                  {getInput(currencies)
                    .map((currency) => currency.name)
                    .join(', ')}
                </p>
                <p>
                  languages:{' '}
                  {getInput(languages)
                    .map((lang) => lang)
                    .join(', ')}
                </p>
              </div>
              <div>
                <h3>Border Countries:</h3>
                <div className="bg-blue-200 flex gap-4">
                  {borders.map((border) => (
                    <button key={border} type="button">
                      {border}
                    </button>
                  ))}
                </div>
              </div>
            </article>
          )
        )}
      </section>
    </>
  );
}

export default CountryPage;
