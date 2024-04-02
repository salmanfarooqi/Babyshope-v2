import React from 'react';

function DotImages({ numRows, numDots, dotColors, imageSrc,className,ImageClass }) {
  // Function to generate an array of specified length
  const generateArray = (length) => {
    return Array.from({ length }, (_, index) => index);
  };

  return (
    <div className='w-full relative'>
      <div className={`${className}  flex flex-col relative`}>
        {generateArray(numRows).map((row, rowIndex) => (
          <div key={rowIndex} className='flex justify-between py-3'>
            {generateArray(numDots).map((dot, dotIndex) => (
             <div key={dotIndex} className={`rounded-full w-2 h-2 ${dotColors}`} />

            ))}
          </div>
        ))}
      </div>
      <div className='absolute left-32 top-24'>
        <img src={imageSrc} alt='' className={ `${ImageClass} rounded-xl`} />
      </div>
    </div>
  );
}

export default DotImages;
