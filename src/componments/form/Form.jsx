import React from 'react';
import InputElement from './InputElement';
import Dropdown from './Dropdown';

function Form({ searchValue, optionValue, onChangeSearch, onChangeSelect }) {
  return (
    <form className="flex flex-col gap-12 md:flex-row md:justify-between">
      <InputElement value={searchValue} onChange={onChangeSearch} />
      <Dropdown optionValue={optionValue} onChange={onChangeSelect} />
    </form>
  );
}

export default Form;
