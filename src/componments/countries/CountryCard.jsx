import React from 'react';

function CountryCard({ name, alt, countryCaptial, region, flags, population }) {
  return (
    <article
      data-testid="card"
      className="flex flex-col w-[300px] h-[340px] gap-8 bg-lightGray-800 rounded-lg dark:bg-darkBlue-700 overflow-hidden shadow-lg shadow-gray-600 dark:shadow-gray-600"
    >
      <img src={flags} alt={alt} className="h-[160px] w-full object-fit" />
      <div className="p-2">
        <h2 className="pb-2 font-extrabold text-darkBlue-900 dark:text-lightGray-800">
          {name}
        </h2>
        <p className="card-text">Population: {population}</p>
        <p className="card-text">Region: {region}</p>
        <p className="card-text">Captial: {countryCaptial}</p>
      </div>
    </article>
  );
}

export default CountryCard;
