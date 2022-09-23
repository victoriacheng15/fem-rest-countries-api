import React from 'react';

function Spinner() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div
        className="spinner-border aspect-square w-20 animate-spin rounded-full border-8 border-darkBlue-700 border-t-lightGray-900 dark:border-lightGray-900 dark:border-t-darkBlue-800"
        role="status"
      >
        <span className="invisible">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
