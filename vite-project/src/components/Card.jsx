import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Card({ className, productId, productName, productPrice, productImage, onBuyClick }) {
  let navigate=useNavigate()
  const handleClick = () => {
    if(localStorage.getItem("token")==null){
      navigate("/login")
    }
    onBuyClick(productId);
  };
  return (
    <div className={` ${className} w-full relative group `}>
        <div className="w-full flex flex-col items-center justify-center relative group-hover:translate-y-[-20px] transition-transform duration-300">
          <div className='image-container'>
            <img src={productImage || ""} className="w-full mb-auto" alt="Product Image" />
          </div>
          <h3 className="text-lg font-medium mt-10">{productName}</h3>
          <strong className="block mt-3 mb-10">{productPrice}</strong>
          <span className={`absolute bottom-0 left-0 w-full h-2/3 bg-[#DCE5E4] opacity-0 transition-opacity duration-500 group-hover:opacity-20`}></span>
          {/* Buy Now Button */}
          <button onClick={handleClick} className="absolute bottom-0 mt-12  text-white py-2 px-4 rounded  transition-colors duration-300 hidden group-hover:block">
          <img src="public/featured/icons8-plus.svg" className="w-8 h-8" alt="Close Icon" />
          </button>
        </div>
    </div>
  );
}
export default Card;



