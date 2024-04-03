import React from 'react';

function ChooseUsCard({ className, imageSrc, title, description }) {
  return (
    <div className={`${className} w-full flex flex-col justify-center px-10`}>
      <div className='rounded-full bg-[#CBD5D1] w-8 h-8 absolute opacity-50 top-10 left-16'/>
      <div className='flex relative'>
        <img src={imageSrc} alt='' className='w-12 h-12'/>
      </div>
      <p className='font-bold mt-4'>{title}</p>
      <p className='mt-1'>{description}</p>
    </div>
  );
}

export default ChooseUsCard;
