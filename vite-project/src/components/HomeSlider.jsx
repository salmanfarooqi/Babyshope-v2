import React from "react";
import Slider from "react-slick";

function CustomArrow({ className, style, onClick, backgroundColor }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#EFF2F1",
        fontSize: "5vw", // Adjust the size of the arrow icon based on screen width
        width: "5vw", // Adjust the size of the arrow container based on screen width
        height: "5vw", // Adjust the size of the arrow container based on screen width
        borderRadius: "50%",
        backgroundColor: backgroundColor || "#CED6D3",
        transition: "background-color 0.3s",
        cursor: "pointer",
        paddingLeft: "10px", // Add left padding to the arrow
        paddingRight: "10px", // Add right padding to the arrow
        margin: ["-70px", "-40px", "-20px", "-20px"], // Responsive margin for mobile, tablet, laptop, desktop
      }}
      onClick={onClick}
      onMouseEnter={(e) => e.target.style.backgroundColor =  " #3B5D50"}
      onMouseLeave={(e) => e.target.style.backgroundColor = "#CED6D3"}
    >
    </div>
  );
}

function CustomArrows({ testimonials, className }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };

  return (
    <div className="slider-container relative px-24"> {/* Add padding to the slider container */}
      <Slider {...settings}>
        <div>
          {/* Apply w-full class to the image element */}
          <img src="/public/featured/post-1.jpg" alt="" className="w-full h-1/2" />
        </div>
        <div>
          {/* Apply w-full class to the image element */}
          <img src="/public/featured/post-1.jpg" alt="" className="w-full" />
        </div>
        <div>
          {/* Apply w-full class to the image element */}
          <img src="/public/featured/post-1.jpg" alt="" className="w-full" />
        </div>
        <div>
          {/* Apply w-full class to the image element */}
          <img src="/public/featured/post-1.jpg" alt="" className="w-full" />
        </div>
      </Slider>
    </div>
  );
}

export default CustomArrows;
