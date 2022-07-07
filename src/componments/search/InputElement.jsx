import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';

function InputElement() {
  return (
    <div className="relative flex items-center rounded-lg bg-lightGray-700 dark:bg-darkBlue-700">
      <IoSearchSharp className="absolute ml-1 text-2xl text-lightGray-900 dark:text-lightGray-700" />
      <input
        className="w-full h-full p-4 pl-8 rounded-lg outline-1 outline-dashed text-lightGray-900 dark:bg-darkBlue-700 dark:placeholder-lightGray-700"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default InputElement;
