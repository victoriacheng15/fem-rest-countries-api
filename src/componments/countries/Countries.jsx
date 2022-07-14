import React from 'react';

function Countries({ countries, loading }) {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <section className="grid items-center justify-center py-12 justify-items-center gap-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map(({ name, capital, region, flags, population }) => (
        <article
          key={name.common}
          className="flex flex-col w-[300px] h-[340px] gap-8 bg-lightGray-700 rounded-lg dark:bg-darkBlue-700 overflow-hidden shadow-lg dark:shadow-gray-700"
        >
          <img
            src={flags.png}
            alt={name.official}
            className="h-[160px] w-full object-fit"
          />
          <div className="p-2">
            <h2 className="pb-2 font-extrabold text-darkBlue-900 dark:text-lightGray-800">
              {name.common}
            </h2>
            <p className="card-text">Population: {population}</p>
            <p className="card-text">Region: {region}</p>
            <p className="card-text">Captial: {capital}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Countries;
