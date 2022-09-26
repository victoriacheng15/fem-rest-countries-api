import React from 'react';
import { Link } from 'react-router-dom';
import Paragraph from '../Paragraph';

function CountryCard({
  name,
  alphaCode,
  alt,
  countryCaptial,
  region,
  flags,
  population,
}) {
  return (
    <Link
      className="flex h-[420px] basis-80 flex-col gap-4 overflow-hidden rounded-lg bg-lightGray-800 shadow-lg shadow-gray-600 duration-300 ease-in-out hover:scale-110 dark:bg-darkBlue-700 dark:shadow-gray-600 lg:basis-72"
      to={`/country/${alphaCode}`}
    >
      <article>
        <img src={flags} alt={alt} className="object-fit h-[180px] w-full" />
        <div className="flex flex-col gap-4 p-3">
          <h2 className="my-2 text-lg font-extrabold text-darkBlue-900 dark:text-lightGray-800">
            {name}
          </h2>
          <div className="flex flex-col gap-2">
            <Paragraph
              countryCard
              title="population"
              content={population.toLocaleString()}
            />
            <Paragraph countryCard title="Region" content={region} />
            <Paragraph countryCard title="Captial" content={countryCaptial} />
          </div>
        </div>
      </article>
    </Link>
  );
}

export default CountryCard;
