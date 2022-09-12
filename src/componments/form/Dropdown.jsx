import React, { useContext } from 'react';
import CountriesContext from '../../context/CountriesContext';

function Dropdown() {
  const { selectRegion, handleSelect } = useContext(CountriesContext);

  const regions = [
    { id: 0, label: 'Select Region', value: '' },
    { id: 1, label: 'All', value: '' },
    { id: 2, label: 'Africa', value: 'Africa' },
    { id: 3, label: 'America', value: 'America' },
    { id: 4, label: 'Asia', value: 'Asia' },
    { id: 5, label: 'Europe', value: 'Europe' },
    { id: 6, label: 'Oceania', value: 'Oceania' },
  ];

  return (
    <select
      data-testid="dropdown"
      value={selectRegion}
      onChange={(e) => handleSelect(e.target.value)}
      className="w-64 p-4 rounded-lg outline-1 outline-dashed bg-lightGray-700 dark:bg-darkBlue-700 text-lightGray-900 dark:text-lightGray-700 md:w-48"
    >
      {regions.map(({ id, value, label }) => (
        <option data-testid="option" key={id} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
