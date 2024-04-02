import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

import { IoCall } from "react-icons/io5";

function ContactUsCard() {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full md:w-[80%] lg:w-[60%] grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='flex justify-center items-center'>
          <div className='bg-[#3B5D50] w-20 h-14 flex justify-center items-center rounded-md'>
            <IoLocationSharp className='text-white text-3xl' />
          </div>
          <div className='ml-2'>
          <p className='text-gray-600'>43 Raymouth Rd. Baltemoer, London 3910</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='bg-[#3B5D50] w-20 h-14 flex justify-center items-center rounded-md'>
            <CgMail className='text-white text-3xl' />
          </div>
          <div className='ml-2'>
          <p className='text-gray-600'>43 Raymouth Rd. Baltemoer, London 3910</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='bg-[#3B5D50] w-20 h-14 flex justify-center items-center rounded-md'>
          <IoCall  className='text-white text-3xl' />
          </div>
          <div className='ml-2'>
          <p className='text-gray-600'>43 Raymouth Rd. Baltemoer, London 3910</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ContactUsCard;
