import React from "react";
import { FaStar } from "react-icons/fa";

function ProductCard({
  numStars,
  starColor,
  buttonText,
  productName,
  price,
  imageSrc,
  mainClass,
}) {
  // Dynamically generate an array of stars based on the numStars prop
  const stars = Array.from({ length: numStars }, (_, index) => index + 1);

  return (
    <div className={`w-[400px] group relative ${mainClass} border border-2`}>
      <div className="w-full px-10 flex flex-col justify-center items-center">
        {/* Render the product image */}
        <img src={imageSrc} alt={productName} className="w-48 h-48" />

        {/* Render the star rating */}
        <div className="flex justify-center py-3">
          {stars.map((_, index) => (
            <FaStar key={index} className={`text-${starColor}`} />
          ))}
        </div>

        {/* Render the product name */}
        <p>{productName}</p>

        {/* Render the product price */}
        <p className="text-lg font-bold">{price}</p>

        {/* Render the "Buy Now" button */}
        <button className="py-4 px-8 bg-[#088178] text-base font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
