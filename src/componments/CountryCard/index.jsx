import React from 'react';
import { Link } from 'react-router-dom';

function CountryCard({
  name,
  dataName,
  alt,
  countryCaptial,
  region,
  flags,
  population,
}) {
  return (
    <Link
      className="grow-1 flex h-[375px] basis-72 flex-col gap-4 overflow-hidden rounded-lg bg-lightGray-800 shadow-lg shadow-gray-600 dark:bg-darkBlue-700 dark:shadow-gray-600"
      to={`/country/${dataName}`}
    >
      <article>
        <img src={flags} alt={alt} className="object-fit h-[180px] w-full" />
        <div className="p-4">
          <h2 className="pb-2 font-extrabold text-darkBlue-900 dark:text-lightGray-800">
            {name}
          </h2>
          <p className="card-text">Population: {population.toLocaleString()}</p>
          <p className="card-text">Region: {region}</p>
          <p className="card-text">Captial: {countryCaptial}</p>
        </div>
      </article>
    </Link>
  );
}

export default CountryCard;
