import React from 'react';
import { DarkTheme, LightTheme } from './Theme';

function HeaderBar({ onClick, isDark }) {
  return (
    <header className="bg-lightGray-700 py-8 text-darkBlue-900 dark:bg-darkBlue-700 dark:text-lightGray-700 lg:py-16">
      <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between">
        <h1
          data-testid="heading"
          className="text-[20px] font-bold md:text-[30px]"
        >
          Where in the world?
        </h1>
        <button
          type="button"
          onClick={onClick}
          className="flex items-center gap-2 rounded-lg border-2 border-gray-600 p-2 text-sm font-semibold duration-300 ease-in-out hover:bg-darkBlue-900 hover:text-lightGray-700 dark:border-gray-300 dark:hover:bg-lightGray-700 dark:hover:text-darkBlue-900 md:text-base"
        >
          {isDark ? <DarkTheme /> : <LightTheme />}
        </button>
      </div>
    </header>
  );
}

export default HeaderBar;
