import React from 'react';

function MaxWidthContainer({ children, compClass }) {
  return (
    <div className={`mx-auto w-11/12 max-w-7xl ${compClass}`}>{children}</div>
  );
}

export default MaxWidthContainer;
