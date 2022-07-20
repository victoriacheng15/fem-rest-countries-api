import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';

function InputElement({ input, onChange }) {
  return (
    <div className="relative flex items-center rounded-lg bg-lightGray-700 dark:bg-darkBlue-700">
      <IoSearchSharp className="absolute ml-1 text-2xl text-lightGray-900 dark:text-lightGray-700" />
      <input
        value={input}
        onChange={onChange}
        className="w-full h-full p-4 pl-8 rounded-lg text-lightGray-900 dark:bg-darkBlue-700 dark:placeholder-lightGray-700 outline-style md:w-[480px]"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default InputElement;
