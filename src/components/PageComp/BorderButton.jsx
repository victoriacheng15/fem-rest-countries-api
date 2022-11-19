import React from 'react';
import { Link } from 'react-router-dom';

function BorderButton({ borderLink, borderName }) {
  return (
    <Link
      to={borderLink}
      className="rounded-lg bg-lightGray-800 py-2 px-3 text-lg font-medium shadow-md shadow-darkBlue-900 duration-300 ease-in-out hover:scale-125 dark:bg-darkBlue-900 dark:text-lightGray-800 dark:shadow-lightGray-900 lg:text-xl"
    >
      {borderName}
    </Link>
  );
}

export default BorderButton;
