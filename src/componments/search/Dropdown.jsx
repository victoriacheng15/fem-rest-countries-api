import React from 'react';

function Dropdown() {
  const regions = [
    { label: 'Filter by Region', value: '' },
    { label: 'Africa', value: 'Africa' },
    { label: 'America', value: 'America' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Europe', value: 'Europe' },
    { label: 'Oceania', value: 'Oceania' },
  ];

  return (
    <select className="p-4 rounded-lg outline-1 outline-dashed bg-lightGray-700 dark:bg-darkBlue-700 text-lightGray-900 dark:text-lightGray-700">
      {regions.map((region) => (
        <option value={region.value}>{region.label}</option>
      ))}
    </select>
  );
}

export default Dropdown;
