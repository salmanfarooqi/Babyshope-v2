import React from 'react'

function OurTeam() {
  return (
    <div className=' w-[400px] flex flex-col justify-center text-gray-700'>
        <img src='/featured/person_1.jpg' alt='' className='w-full' />
        <p className='underline font-semibold text-2xl mt-10 cursor-pointer hover:no-underline'>Lawson Arnold</p>
        <span className='mt-1'>CEO, Founder, Atty.</span>
        <p className='mt-8'>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <p className='underline font-bold text-gray-500 mt-2 hover:no-underline cursor-pointer'>Learn More</p>
    </div>
  )
}

export default OurTeam