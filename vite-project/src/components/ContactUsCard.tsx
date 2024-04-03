import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
function ContactUsCard() {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        <div className='w-full flex justify-center items-center gap-2'>
          <div className='bg-[#3B5D50] w-12 h-8 md:w-20 lg:w-20 md:h-12 lg:h-14 flex justify-center items-center rounded-md'>
            <IoLocationSharp className='text-white text-xl md:text-2xl lg:text-3xl' />
          </div>
          <div className='ml-2'>
          <p className='text-gray-600 md:text-sm lg:text-base'>43 Raymouth Rd. Baltemoer, London 3910</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <div className='bg-[#3B5D50] w-12 h-8 md:w-20 lg:w-20 md:h-12 lg:h-14 flex justify-center items-center rounded-md'>
            <CgMail className='text-white text-xl md:text-2xl lg:text-3xl' />
          </div>
          <div className='ml-2'>
          <p className='text-gray-600  md:text-sm lg:text-base'>43 Raymouth Rd. Baltemoer, London 3910</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <div className='bg-[#3B5D50] w-12 h-8 md:w-20 lg:w-20 md:h-12 lg:h-14 flex justify-center items-center rounded-md'>
          <IoCall  className='text-white text-xl md:text-2xl lg:text-3xl' />
          </div>
          <div className='ml-2'>
          <p className='text-gray-600  md:text-sm lg:text-base'>43 Raymouth Rd. Baltemoer, London 3910</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUsCard;