import React, { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import "./CustomSlider.css"; // Import your custom CSS file

function HomeSlider({ testimonials, className }) {
  const [activeDot, setActiveDot] = useState(0); // State to track active dot index

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    dots: true,
    appendDots: dots => (
      <div className="dots-container">
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={activeDot === i ? "active-dot" : "dot"}></div> // Custom dot component with active class
    ),
    beforeChange: (oldIndex, newIndex) => setActiveDot(newIndex) // Update active dot index on slider change
  };

  return (
    <div className="slider-container relative"> {/* Set the height of the slider container to h-screen */}
      <Slider {...settings}>
        <div>
          {/* slider1: Make the image fill the entire slider container */}
          <img src="/public/Home/Silder-1.jpg" alt="" className="w-full h-[400px] object-cover" />
        </div>
        
        <div>
          {/* slider3: Make the image fill the entire slider container */}
          <img src="/public/Home/Slider-3.jpg" alt="" className="w-full h-[400px] object-cover" />
        </div>
       
        <div>
          {/* slider3: Make the image fill the entire slider container */}
          <img src="/public/Home/Slider-6.jpg" alt="" className="w-full h-[400px] object-cover" />
        </div>


        <div>
          {/* slider3: Make the image fill the entire slider container */}
          <img src="/public/Home/Slider-8.jpg" alt="" className="w-full h-[400px] object-cover" />
        </div>

        <div>
          {/* slider3: Make the image fill the entire slider container */}
          <img src="/public/Home/Slider-10.jpg" alt="" className="w-full h-[400px] object-cover" />
        </div>

        <div>
          {/* slider3: Make the image fill the entire slider container */}
          <img src="/public/Home/Slider-11.jpg" alt="" className="w-full h-[400px] object-cover" />
        </div>
      </Slider>
    </div>
  );
}
export default HomeSlider;
