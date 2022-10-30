import React from 'react';

function Button({ onClick, children, typeBtn }) {
  const classes = {
    paginationBtn:
      'text-5xl text-darkBlue-900 duration-300 ease-in-out hover:scale-150 dark:text-lightGray-800',
    themeBtn:
      'flex items-center gap-2 rounded-lg border-2 border-gray-600 p-2 text-sm font-semibold duration-300 ease-in-out hover:bg-darkBlue-900 hover:text-lightGray-700 dark:border-gray-300 dark:hover:bg-lightGray-700 dark:hover:text-darkBlue-900 md:text-base',
  };

  return (
    <button type="button" className={classes[typeBtn]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
