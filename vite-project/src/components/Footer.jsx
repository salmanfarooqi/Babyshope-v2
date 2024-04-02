import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinBoxFill } from "react-icons/ri";

const Footer = () => {
  const footerdata = [
    {
      title: "About Us",
      path: "/aboutus",
    },

    {
      title: "Services",
      path: "/aboutus",
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
  return (
    <div className="flex justify-center">
      <div className="w-[95%] sm:w-[75%] md:w-11/12  h-screen mt-20">
        <div>
          <div className="flex items-center text-center gap-2 text-2xl font-semibold text-gray-400 ">
            <FaRegEnvelope />{" "}
            <p className="text-[#3b5d50] text-lg ">Subscribe to Newsletter</p>
          </div>
          <div className="flex w-full gap-5  flex-wrap sm:flex-nowrap  mt-5 ">
            <input
              type="text"
              className="border border-gray-300 py-3 px-2 rounded-lg md:w-72 "
              placeholder="Enter your name"
            />
            <div className=" flex flex-wrap gap-4">
              <input
                type="text"
                className="border border-gray-300 py-3 px-2 rounded-lg  md:w-72 "
                placeholder="Enter your email"
              />
              <div>
                <button
                  type="button"
                  className="bg-[#3b5d50]  px-3.5 py-3 rounded-xl text-white"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-[#3B5D50] font-semibold  text-3xl">Furni.</div>

          <div className="flex lg:w-1/2 gap-8 flex-wrap lg:flex-nowrap">
            <div className="text-[#6a6a6a] leading-7 w-full">
              Transform your living space into a haven of comfort and style with
              Furni Website. Explore our curated collection of premium furniture
              and elevate your home with quality craftsmanship and timeless
              design. Shop now and discover the perfect pieces to make your
              house feel like a true sanctuary.
              <div className="flex gap-1.5 mt-5">
                <div className="bg-[#DCE5E4] hover:bg-[#3B5D50] hover:text-white text-[#3B5D50] w-10 h-10 flex items-center justify-center rounded-full text-2xl">
                  <TiSocialFacebook />
                </div>
                <div className="bg-[#DCE5E4] hover:bg-[#3B5D50] hover:text-white text-[#3B5D50] w-10 h-10 flex items-center justify-center rounded-full text-xl">
                  <TiSocialTwitter />
                </div>
                <div className="bg-[#DCE5E4] hover:bg-[#3B5D50] hover:text-white text-[#3B5D50]  w-10 h-10 flex items-center justify-center rounded-full text-xl">
                  <CiInstagram />
                </div>
                <div className="bg-[#DCE5E4] hover:bg-[#3B5D50] hover:text-white text-[#3B5D50]    w-10 h-10 flex items-center justify-center rounded-full text-xl">
                  <RiLinkedinBoxFill />
                </div>
              </div>
            </div>
            <div className="flex flex-col whitespace-nowrap gap-2">
              {footerdata?.map((item, index) => (
                <Link
                  key={index}
                  to={item?.path}
                  className="text-[#2f2f2f] hover:text-[#979797]"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-20 flex flex-col items-center lg:flex-row justify-center lg:justify-between">
          <div className="mt-5 text-[#6a6a6a]">
            Copyright ©2024. All Rights Reserved.
          </div>
          <div className="flex gap-7 mt-3 lg:mt-5  ">
            <Link className="hover:text-[#979797]">Terms & Conditions</Link>
            <Link className="hover:text-[#979797]">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
