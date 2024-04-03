import React from 'react'

function CouponCode(className) {
  return (
    <div className={`${className} w-full border border-gray-300 justify-center items-center py-10`}>
    <div className='w-full flex flex-col justify-center items-center'>
    <label className=''>Enter your coupon code if you have one</label>
    <div className='mt-5 flex gap-2'>
        <input type='text' className='border border-gray-500 py-3 px-2  rounded-md' placeholder='Coupon Code'/>
        <button className='px-4  rounded-3xl bg-[#222222] font-semibold text-white'>Apply</button>
    </div>

    </div>
      
    </div>
  )
}

export default CouponCode