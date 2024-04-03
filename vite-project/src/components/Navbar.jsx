import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const navbardata = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/Shop",
    },

    
    {
      title: "About us",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/aboutus",
    },
    {
      title: "Contact us",
      path: "/aboutus",
    },
  ];

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const linkClass = (index) => {
    if (index === activeLink) {
      return "border-b-4 border-yellow-400 text-white";
    }
    return "custom hover:text-white";
  };
  return (
    <div className="flex justify-center items-center bg-[#3B5D50] h-20 sticky top-0 z-50">
      <div className="w-[90%] lg:w-[90%] flex justify-between items-center">
        <div className="text-white font-semibold  text-4xl">
          Furni<span className="text-gray-400">.</span>
        </div>
        <div className="hidden md:block">
        <div className=" flex gap-10  text-gray-400 font-semibold ">
          <div className="flex items-center text-center gap-4 lg:gap-10 ">
            {navbardata?.map((item, index) => (
              <Link
                key={index}
                to={item?.path}
                className={linkClass(index)}
                onClick={() => handleLinkClick(index)}
              >
                {item?.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center text-2xl gap-7">
            <Link to="/login" className="hover:text-white">
              <BsFillPersonFill  />
            </Link>
            <Link to="/cart" className="hover:text-white">
              <FaCartShopping />
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
