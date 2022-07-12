import React, { useState } from 'react';
import InputElement from '../formElements/InputElement';
import Dropdown from '../formElements/Dropdown';
import Countries from '../countries/Countries';

function Main() {
  const [region, setRegion] = useState('default');
  const [input, setInput] = useState('');
  const handleSelect = (e) => setRegion(e.target.value);
  const handleInput = (e) => setInput(e.target.value);

  return (
    <main className="min-h-screen py-7 bg-lightGray-800 dark:bg-darkBlue-800">
      <div className="w-11/12 mx-auto">
        <form className="flex flex-col gap-12 md:flex-row md:justify-between">
          <InputElement input={input} handleInput={handleInput} />
          <Dropdown region={region} handleSelect={handleSelect} />
        </form>
        <Countries />
      </div>
    </main>
  );
}

export default Main;
