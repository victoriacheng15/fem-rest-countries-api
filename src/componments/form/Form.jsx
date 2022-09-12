import React from 'react';
import InputElement from './InputElement';
import Dropdown from './Dropdown';

function Form() {
  return (
    <form className="flex flex-col gap-12 md:flex-row md:justify-between">
      <InputElement />
      <Dropdown />
    </form>
  );
}

export default Form;
