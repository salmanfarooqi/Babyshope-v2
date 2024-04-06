import React from 'react';
import { Link } from 'react-router-dom';

function HomeBannar({ className,title, description,Button1Classname, buttonText1,Button2Classname, buttonText2, imageUrl }) {
  return (
    <div className={`${className} w-full  flex items-center justify-center bg-[#3B5D50] px-5`}>
      <div className='w-full md:w-[87%] flex flex-col md:flex-row'>
        <div className='w-full md:w-[40%] flex flex-col justify-center'>
          <p className='font-bold text-3xl md:text-5xl text-white'>{title}</p>
          <p className='mt-6 md:mt-10 text-lg md:text-xl font-medium text-gray-300'>{description}</p>
          {/* <div className='w-full  flex mt-8'> */}
          { buttonText2 && (
            <div className='w-full flex  gap-5 mt-8 '>
              <div className='w-full md:w-1/2 lg:w-[30%] flex justify-center md:justify-start'>
              <Link to="/shop" ><button className={`${Button1Classname} px-6 sm:px-10 md:px-3 py-2 rounded-full font-bold  text-[#3B5D50]`}>{buttonText1}</button></Link> 
              </div>
              <div className='w-full md:w-1/2 lg:w-[30%] flex justify-center md:justify-start'>
               <Link to={"/Blogs"}>
               <button className={`${Button2Classname} px-6 sm:px-10 md:px-4  py-[6px]  rounded-full font-bold text-white `}>{buttonText2}</button>
                </Link>  
              </div>
            </div>

)}
          </div>
        {/* </div> */}
        
        <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
          {imageUrl && (
          <img src={imageUrl} alt='' className='w-full md:w-auto' />
)}
        </div>
      </div>
    </div>
  );
}

export default HomeBannar;
