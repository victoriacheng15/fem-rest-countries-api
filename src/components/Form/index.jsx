import React from 'react';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';

function Form() {
  return (
    <form className="flex flex-col gap-12 md:flex-row md:justify-between">
      <SearchBar />
      <Dropdown />
    </form>
  );
}

export default Form;
