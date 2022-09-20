import React from 'react';

function Paragraph({ title, content }) {
  return (
    <p className="text-darkBlue-900 dark:text-lightGray-800">
      <span className="font-semibold capitalize">{title}:</span> {content}
    </p>
  );
}

export default Paragraph;
