import React from "react";
import Layout from "./Layout";
// import "./Banner.css"; // Import CSS file for animations

function Banner() {
  // Array of image URLs
  const images = [
    "/public/shoptools/image-8.png",
    "/public/shoptools/image-9.png",
    "/public/shoptools/image-10.png",
    "/public/shoptools/image-11.png",
    "/public/shoptools/image-12.png",
    "/public/shoptools/image-13.png",
    "/public/shoptools/image-14.png",
    "/public/shoptools/image-9.png",
    "/public/shoptools/image-10.png",
    "/public/shoptools/image-11.png",
  ];

  return (
    <Layout>
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%]  mt-6">
          <div className="w-full absolute justify-center items-center" />
          <div className="w-full flex flex-wrap banner-container">
            {/* Map over the images array to render each image */}
            {images.map((image, index) => (
              <div key={index} className="w-[20%] h-[20%] rounded-full banner-item">
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="rotate-animation"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Banner;
