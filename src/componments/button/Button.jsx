import React from 'react';

function Button({ dataType, onClick, children }) {
  return (
    <button
      type="button"
      data-type={dataType}
      className="text-5xl text-darkBlue-900 dark:text-lightGray-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
