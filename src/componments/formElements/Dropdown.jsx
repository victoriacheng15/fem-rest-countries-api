import React from 'react';

function Dropdown({ region, onChange }) {
  const regions = [
    { id: 0, label: 'Filter by Region', value: 'All' },
    { id: 1, label: 'Africa', value: 'Africa' },
    { id: 2, label: 'America', value: 'America' },
    { id: 3, label: 'Asia', value: 'Asia' },
    { id: 4, label: 'Europe', value: 'Europe' },
    { id: 5, label: 'Oceania', value: 'Oceania' },
  ];

  return (
    <select
      data-testid="dropdown"
      value={region}
      onChange={onChange}
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
