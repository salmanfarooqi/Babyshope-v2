import React from 'react'

function ContactUsForm() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
    <div className='w-1/2'>
    <div className=' flex justify-between'>
    <div className='flex flex-col justify-between w-[48%]'>
    <label>First name</label>
    <input type='text' name='' className='border border-gray-400 rounded-lg px-1 py-2 focus:border-[1px] focus:outline-gray-500'/>
</div>
<div className='flex flex-col justify-between w-[48%] '>
    <label>
Last name</label>
    <input type='text' name='' className='border border-gray-400 rounded-lg px-1 py-2 focus:border-[1px] focus:outline-gray-500'/>
</div>

    </div>
    <div className='w-full flex flex-col'>
    <label>Email address</label>
    <input type='text' name='' className='border border-gray-400 rounded-lg px-1 py-2 focus:outline-gray-500'/>
    </div>
    <div className='w-full flex flex-col h-[150px]'>
    <label>Message</label>
   <textarea
  type='text'
  name=''
  className={`border rounded-lg px-1 py-2 h-[150px] border-gray-400 focus:border-[1px] focus:outline-gray-500`}
/>

    </div>
    <button className="font-bold text-sm bg-[#222222] px-5 py-2 mt-4 rounded-3xl text-white">Send Message</button>
    </div>
    
    
      
    </div>
  )
}

export default ContactUsForm
