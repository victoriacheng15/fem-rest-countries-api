import React from 'react';

function Paragraph({ title, content, countryCard = false }) {
  return (
    <p
      className={`${
        countryCard ? 'text-sm md:text-lg' : 'text-lg md:text-xl'
      } text-darkBlue-900 dark:text-lightGray-800`}
    >
      <span className="font-bold capitalize">{title}:</span> {content}
    </p>
  );
}

export default Paragraph;
