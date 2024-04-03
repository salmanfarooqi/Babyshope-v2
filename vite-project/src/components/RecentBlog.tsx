import React from 'react';
import { Link } from 'react-router-dom';

function RecentBlog({className, imageUrl, title, author, date, link }) {
  return (
    <div className={` ${className} w-full flex flex-col items-center justify-center`}>
      <Link to={link}>
        <div className="relative">
          <img src={imageUrl} alt={title} className='rounded-2xl hover:opacity-50 transition-opacity duration-300' />
          <div className="absolute inset-0 bg-gray-400 opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <p className='font-semibold mt-5'>{title}</p>
        <span className='flex gap-1'>
          <p>by</p>
          <p className='font-semibold'>{author}</p>
          <p>on</p>
          <p>{date}</p>
        </span>
        </div>
      </Link>
    </div>
  );
}

export default RecentBlog;
