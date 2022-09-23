import React from 'react';

function Container({ children }) {
  return <div className="flex flex-1 flex-col gap-3 py-5">{children}</div>;
}

export default Container;
