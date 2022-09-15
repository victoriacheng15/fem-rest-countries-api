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
      className="h-[375px] flex flex-col gap-4 overflow-hidden rounded-lg shadow-lg basis-72 grow-1 bg-lightGray-800 dark:bg-darkBlue-700 shadow-gray-600 dark:shadow-gray-600"
      to={`/country/${dataName}`}
    >
      <article>
        <img src={flags} alt={alt} className="h-[180px] w-full object-fit" />
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
