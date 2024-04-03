import React from "react";
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBannar";
import Card from "../components/Card";
import ChooseUsCard from "../components/ChooseUsCard";
import DotImages from "../components/DotImages";
import { Link } from "react-router-dom";
import SimpleSlider from "../components/SimpleSlider";
import RecentBlog from "../components/RecentBlog";
const AboutUs = () => {
  const choosdata = [
    {
      imageSrc: "/public/featured/truck.svg",
      title: "Fast & Free Shipping",
      description:
        "Enjoy swift and complimentary shipping, ensuring your furniture arrives promptly and hassle-free to your doorstep.",
    },
    {
      imageSrc: "/public/featured/bag.svg",
      title: "Easy to Shop",
      description:
        "Explore our user-friendly online platform designed for effortless browsing and seamless shopping, ensuring a hassle-free experience from start to finish.",
    },
    {
      imageSrc: "/public/featured/support.svg",
      title: "24/7 Support",
      description:
        "Experience uninterrupted assistance around the clock, ensuring peace of mind and prompt resolution to any inquiries or concerns, whenever you need it.",
    },
    {
      imageSrc: "/public/featured/return.svg",
      title: "Hassle Free Returns",
      description:
        "Experience peace of mind with our hassle-free returns policy, ensuring effortless exchanges or refunds for your utmost satisfaction.",
    },
  ];

  const dummyTestimonials = [
    {
      quote:
        "Impeccable product quality! Every piece of furniture I've purchased from Furni Website has exceeded my expectations in terms of both style and durability. The attention to detail and craftsmanship are truly outstanding.",
      image: "/featured/person-1.jpg",
      author: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      quote:
        "Impeccable product quality! Every piece of furniture I've purchased from Furni Website has exceeded my expectations in terms of both style and durability. The attention to detail and craftsmanship are truly outstanding.",
      image: "/featured/person-1.jpg",
      author: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      quote:
        "Impeccable product quality! Every piece of furniture I've purchased from Furni Website has exceeded my expectations in terms of both style and durability. The attention to detail and craftsmanship are truly outstanding.",
      image: "/featured/person-1.jpg",
      author: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      quote: "Another testimonial",
      image: "/featured/person-2.jpg",
      author: "John Doe",
      position: "CTO, ABC Inc.",
    },
    // Add more dummy testimonial objects as needed
  ];
  return (
    <Layout>
      <div className="bg-[#EFF2F1] pb-24">
        <HomeBanner
          title="About us"
          description="Cutting Edge Interior Design Studio: Where creativity meets precision. Elevate your space with innovative design concepts tailored to your unique style."
          buttonText1="Shop Now"
          buttonText2="Explore"
          imageUrl="/public/featured/couch.png"
          Button1Classname="bg-[#F9BF29]"
        Button2Classname="border-[#9DACA0] border-2"
        />

        <div className="w-[95%] mx-auto flex my-10">
          <div className="w-full flex  flex-wrap lg:flex-nowrap gap-14 ">
            <div className="w-full lg:w-[50%]">
              <div className="mt-20 px-10">
                <h1 className="text-3xl text-[#2F2F2F] font-medium">
                  Why Choose Us
                </h1>
                <p className="mt-3 ">
                  Discover unparalleled craftsmanship and timeless elegance,
                  making us your premier choice for exquisite furniture
                  solutions.
                </p>
              </div>
              <div className="grid grid-cols-2 mt-9 ">
                {choosdata.map((item, index) => (
                  <ChooseUsCard
                    imageSrc={item.imageSrc}
                    title={item.title}
                    description={item.description}
                    className={"px-0 text-sm"}
                  />
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%] flex justify-end">
              <DotImages
                numRows={8}
                numDots={9}
                dotColors="bg-[#F9BF29] "
                imageSrc="/public/featured/img-grid-2.jpg"
                className={"w-1/2"}
                ImageClass={"w-full mt-10 ml-12 "}
              />
            </div>
          </div>
        </div>

        <div className="my-10">
          <SimpleSlider testimonials={dummyTestimonials} />
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
