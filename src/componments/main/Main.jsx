import React, { useState, useEffect } from 'react';
import InputElement from '../search/InputElement';
import Dropdown from '../search/Dropdown';

function Main() {
  const [data, setData] = useState(null);
  const [region, setRegion] = useState('default');
  const [input, setInput] = useState('');
  const handleSelect = (e) => setRegion(e.target.value);
  const handleInput = (e) => setInput(e.target.value);

  // console.log({ option, input });

  useEffect(() => {
    async function getCountries() {
      const url = 'https://restcountries.com/v3.1/all';
      const info = await (await fetch(url)).json();
      setData(info);
    }

    getCountries();
  }, []);

  console.log(data[0]);

  return (
    <main className="min-h-screen py-7 bg-lightGray-800 dark:bg-darkBlue-800">
      <div className="w-11/12 mx-auto">
        <section className="flex flex-col gap-12 md:flex-row md:justify-between">
          <InputElement input={input} handleInput={handleInput} />
          <Dropdown region={region} handleSelect={handleSelect} />
        </section>
        {/* <section>
          {data.map((country) => (
            <section key={country.flag}>
              <img src={country.flag.png} alt={country.name.common} />
              <h2>{country.name.offical}</h2>
              <p>population: {country.population}</p>
              <p>region: {country.region}</p>
              <p>captial: {country.capital[0]}</p>
            </section>
          ))}
        </section> */}
      </div>
    </main>
  );
}

export default Main;
