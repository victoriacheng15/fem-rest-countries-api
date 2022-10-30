import React from 'react';

function DisplayNumber({ num, disaplyType = 'currentNum' }) {
  const classes = {
    currentNum:
      'grid aspect-square w-12 scale-125 place-items-center border-4 border-lightGray-900 text-2xl font-bold dark:border-lightGray-700 dark:text-lightGray-800 md:w-14',

    NotCurrentNum:
      'grid aspect-square w-12 place-items-center border-4 border-darkBlue-700 text-2xl font-bold dark:border-lightGray-900 dark:text-lightGray-700 md:w-14',
  };

  return <span className={classes[disaplyType]}>{num}</span>;
}

export default DisplayNumber;
