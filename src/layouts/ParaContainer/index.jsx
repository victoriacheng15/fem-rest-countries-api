import React from 'react';

function ParaContainer({ children, compType }) {
  const clasees = {
    CountryPage: 'flex flex-1 flex-col gap-3 py-5',
    CountryCard: 'flex flex-col gap-2',
  };
  return <div className={clasees[compType]}>{children}</div>;
}

export default ParaContainer;
