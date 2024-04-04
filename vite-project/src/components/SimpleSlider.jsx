import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CustomArrow(props) {
  const { className, style, onClick, backgroundColor } = props;
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
      }}
      onClick={onClick}
      onMouseEnter={(e) => e.target.style.backgroundColor =  "#3B5D50"}
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
    prevArrow: <CustomArrow />
  };

  return (
    <div className="w-full flex justify-center">
      <div className={`${className} w-11/12 md:w-3/4 lg:w-[80%] xl:w-2/3 slider-container`}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="flex flex-col items-center justify-center">        
                <p className="mt-2 text-gray-500 text-sm sm:text-xl   w-full md:w-3/4 text-center">
                  {testimonial.quote}
                </p>
                <div className="flex flex-col items-center justify-center mt-12 md:mt-24">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mr-4"
                  />
                  <p className="text-gray-600 font-semibold mt-4">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CustomArrows;
