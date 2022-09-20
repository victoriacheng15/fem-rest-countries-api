import React, { useContext } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import CountriesContext from '../../context/CountriesContext';

function InputElement() {
  const { searchTerm, handleSearch } = useContext(CountriesContext);

  return (
    <div className="relative flex items-center rounded-lg bg-lightGray-700 dark:bg-darkBlue-700">
      <IoSearchSharp className="absolute ml-1 text-2xl text-lightGray-900 dark:text-lightGray-700" />
      <input
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="outline-style h-full w-full rounded-lg p-4 pl-8 text-lightGray-900 dark:bg-darkBlue-700 dark:placeholder-lightGray-700 md:w-[480px]"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default InputElement;
