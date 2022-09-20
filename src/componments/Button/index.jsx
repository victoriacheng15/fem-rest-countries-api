import React from 'react';

function Button({ onClick, children }) {
  return (
    <button
      type="button"
      className="text-5xl text-darkBlue-900 dark:text-lightGray-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
