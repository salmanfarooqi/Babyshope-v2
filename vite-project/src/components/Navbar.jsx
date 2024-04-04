// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaCartShopping } from "react-icons/fa6";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RxCross2 } from "react-icons/rx";

// const Navbar = () => {
//   const [showMenu, setshowMenu] = useState(false);
  

//   const navbardata = [
//     {
//       title: "Home",
//       path: "/",
//     },
//     {
//       title: "Shop",
//       path: "/Shop",
//     },

//     {
//       title: "About us",
//       path: "/about",
//     },

//     {
//       title: "Blog",
//       path: "/Blogs",
//     },
//     {
//       title: "Contact us",
//       path: "/contact",
//     },
//   ];

//   return (
//     <div className="flex justify-center items-center bg-[#3B5D50] h-20 sticky top-0 z-50">
//       <div className="w-[90%] lg:w-[90%] flex justify-between items-center">
//         <div className="text-white font-semibold  text-4xl">
//           Baby Shop<span className="text-gray-400">.</span>
//         </div>
//         <div className="hidden md:block">
//           <div className=" flex gap-10  text-gray-400 font-semibold ">
//             <div className="flex items-center text-center gap-4 lg:gap-10 ">
//               {navbardata?.map((item, index) => (
//                 <Link
//                   key={index}
//                   to={item?.path}
//                   className={
//                     "hover:border-b-4 hover:border-yellow-600 hover:text-white"
//                   }
//                 >
//                   {item?.title}
//                 </Link>
//               ))}
//             </div>
//             <div className="flex items-center text-2xl gap-7">
//               <Link to="/login" className="hover:text-white">
//                 <BsFillPersonFill />
//               </Link>
//               <Link to="/cart" className="hover:text-white">
//                 <FaCartShopping />
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="text-white md:hidden ">
//           <RxHamburgerMenu
//             className="text-3xl"
//             onClick={() => setshowMenu(!showMenu)}
//           />
//         </div>
//       </div>

//       <div className={`w-full menu-container  ${showMenu ? "show-menu" : ""}`}>
//         <div className="flex justify-end">
//           <RxCross2
//             className="text-3xl m-4 text-white"
//             onClick={() => setshowMenu(false)}
//           />
//         </div>
//         <div className=" flex gap-10 justify-center flex-col items-center text-gray-400 font-semibold ">
//           <div className="flex items-center flex-col text-white text-2xl text-center gap-8 ">
//             {navbardata?.map((item, index) => (
//               <Link
//                 key={index}
//                 to={item?.path}
//                 className={
//                   "hover:border-b-4 hover:border-yellow-600 hover:text-white"
//                 }
//               >
//                 {item?.title}
//               </Link>
//             ))}
//           </div>
//           <div className="flex items-center text-2xl gap-7">
//             <Link to="/login" className="hover:text-white">
//               <BsFillPersonFill />
//             </Link>
//             <Link to="/cart" className="hover:text-white">
//               <FaCartShopping />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  

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
      path: "/Blogs",
    },
    {
      title: "Contact us",
      path: "/contact",
    },
  ];

  const handleMenuClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setshowMenu(false); // Close the menu if it's open
  };

  return (
    <div className="flex justify-center items-center bg-[#3B5D50] h-20 sticky top-0 z-50">
      <div className="w-[90%] lg:w-[90%] flex justify-between items-center">
        <div className="text-white font-semibold  text-4xl">
          Baby Shop<span className="text-gray-400">.</span>
        </div>
        <div className="hidden md:block">
          <div className=" flex gap-10  text-gray-400 font-semibold ">
            <div className="flex items-center text-center gap-4 lg:gap-10 ">
              {navbardata?.map((item, index) => (
                <Link
                  key={index}
                  to={item?.path}
                  onClick={handleMenuClick}
                  className={
                    "hover:border-b-4 hover:border-yellow-600 hover:text-white"
                  }
                >
                  {item?.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center text-2xl gap-7">
              <Link to="/login" className="hover:text-white">
                <BsFillPersonFill />
              </Link>
              <Link to="/cart" className="hover:text-white">
                <FaCartShopping />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-white md:hidden ">
          <RxHamburgerMenu
            className="text-3xl"
            onClick={() => setshowMenu(!showMenu)}
          />
        </div>
      </div>

      <div className={`w-full menu-container  ${showMenu ? "show-menu" : ""}`}>
        <div className="flex justify-end">
          <RxCross2
            className="text-3xl m-4 text-white"
            onClick={() => setshowMenu(false)}
          />
        </div>
        <div className=" flex gap-10 justify-center flex-col items-center text-gray-400 font-semibold ">
          <div className="flex items-center flex-col text-white text-2xl text-center gap-8 ">
            {navbardata?.map((item, index) => (
              <Link
                key={index}
                to={item?.path}
                onClick={handleMenuClick}
                className={
                  "hover:border-b-4 hover:border-yellow-600 hover:text-white"
                }
              >
                {item?.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center text-2xl gap-7">
            <Link to="/login" className="hover:text-white">
              <BsFillPersonFill />
            </Link>
            <Link to="/cart" className="hover:text-white">
              <FaCartShopping />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

