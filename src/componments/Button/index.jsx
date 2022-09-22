import React from 'react';

function Button({ onClick, children }) {
  return (
    <button
      type="button"
      className="text-5xl text-darkBlue-900 duration-300 ease-in-out hover:scale-150 dark:text-lightGray-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
