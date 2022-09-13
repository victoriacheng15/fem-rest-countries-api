import React from 'react';

function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="w-20 border-8 rounded-full border-darkBlue-700 border-t-lightGray-900 aspect-square spinner-border animate-spin dark:border-lightGray-900 dark:border-t-darkBlue-800"
        role="status"
      >
        <span className="invisible">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
