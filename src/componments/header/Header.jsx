import React from 'react';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';

function Dark() {
  return (
    <>
      <IoMoonOutline /> <span>dark mode</span>
    </>
  );
}

function Light() {
  return (
    <>
      <IoMoon /> <span>light mode</span>
    </>
  );
}

function HeaderBar({ onClick, isDark }) {
  return (
    <header className="py-16 bg-lightGray-800 dark:bg-darkBlue-900 dark:text-lightGray-700">
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <h1 className="text-[30px] font-semibold">Where in the world?</h1>
        <button
          type="button"
          onClick={onClick}
          className="flex items-center gap-2 font-semibold"
        >
          {isDark ? <Dark /> : <Light />}
        </button>
      </div>
    </header>
  );
}

export default HeaderBar;
