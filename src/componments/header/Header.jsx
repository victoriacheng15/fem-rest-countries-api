import React from 'react';
import { DarkTheme, LightTheme } from './Theme';

function HeaderBar({ onClick, isDark }) {
  return (
    <header className="py-16 bg-lightGray-700 dark:bg-darkBlue-700 text-darkBlue-900 dark:text-lightGray-700">
      <div className="flex items-center justify-between w-11/12 mx-auto max-w-7xl">
        <h1
          data-testid="heading"
          className="text-[20px] font-semibold md:text-[30px]"
        >
          Where in the world?
        </h1>
        <button
          type="button"
          onClick={onClick}
          className="flex items-center gap-2 p-2 text-sm font-semibold duration-300 ease-in-out border-2 border-gray-600 rounded-lg md:text-base hover:bg-darkBlue-900 hover:text-lightGray-700 dark:border-gray-300 dark:hover:bg-lightGray-700 dark:hover:text-darkBlue-900"
        >
          {isDark ? <DarkTheme /> : <LightTheme />}
        </button>
      </div>
    </header>
  );
}

export default HeaderBar;
