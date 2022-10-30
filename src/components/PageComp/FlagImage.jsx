import React from 'react';

function FlagImage({ src, alt }) {
  return (
    <div className="grid w-full flex-1 place-items-center">
      <img
        className="w-full border-2 border-lightGray-900"
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default FlagImage;
