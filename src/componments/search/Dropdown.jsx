import React, { useState } from 'react';

function Dropdown() {
  const regions = [
    { id: 0, label: 'Filter by Region', value: '' },
    { id: 1, label: 'Africa', value: 'Africa' },
    { id: 2, label: 'America', value: 'America' },
    { id: 3, label: 'Asia', value: 'Asia' },
    { id: 4, label: 'Europe', value: 'Europe' },
    { id: 5, label: 'Oceania', value: 'Oceania' },
  ];

  const [selected, setSelected] = useState('');
  const handleSelect = (e) => {
    const { value } = e.target;
    console.log(value);
    setSelected(value);
  };

  return (
    <select
      value={selected}
      onChange={handleSelect}
      className="p-4 rounded-lg bg-lightGray-700 dark:bg-darkBlue-700 text-lightGray-900 dark:text-lightGray-700 outline-style"
    >
      {regions.map((region) =>
        !region.id ? (
          <option key={region.id} value={region.value}>
            {region.label}
          </option>
        ) : (
          <option key={region.id} value={region.value}>
            {region.label}
          </option>
        )
      )}
    </select>
  );
}

export default Dropdown;
