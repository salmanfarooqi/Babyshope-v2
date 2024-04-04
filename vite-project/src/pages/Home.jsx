import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBannar";
import Card from "../components/Card";
import ChooseUsCard from "../components/ChooseUsCard";
import DotImages from "../components/DotImages";
import { Link } from "react-router-dom";
import SimpleSlider from "../components/SimpleSlider";
import RecentBlog from "../components/RecentBlog";
import axios from "axios";
import HomeSlider from "../components/HomeSlider";
const Home = () => {
  const [apiData, setapiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/product");
        console.log("data", response.data);

        setapiData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const CardData = [
    {
      className: "",
      linkTo: "/cart",
      productName: "Nordic Chair",
      productPrice: "£50.00",
      productImage: "/featured/product-1.png",
      overlayColor: "#DCE5E4",
      overlayOpacity: "20",
    },
    {
      className: "",
      linkTo: "/cart",
      productName: "Nordic Chair",
      productPrice: "£50.00",
      productImage: "/featured/product-1.png",
      overlayColor: "#DCE5E4",
      overlayOpacity: "20",
    },
    {
      className: "",
      linkTo: "/cart",
      productName: "Nordic Chair",
      productPrice: "£50.00",
      productImage: "/featured/product-1.png",
      overlayColor: "#DCE5E4",
      overlayOpacity: "20",
    },
  ];
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
       
        {/* <HomeBanner
       className="pb-20 pt-3"
          title="The Ultimate Baby Haven - Welcome!"
          description="Step into a world of wonder and warmth at our Baby Shop! From adorable apparel to essential accessories, we've got everything to make your little one's journey as sweet as can be. Explore now and let the magic of parenthood unfold!"
          buttonText1="Shop Now"
          Button1Classname="bg-[#F9BF29]"
          Button2Classname="border-[#9DACA0] border-2 "
          buttonText2="Explore"
          imageUrl="/featured/toybanner.png"
        /> */}

        <HomeSlider/>
        <div className="w-[85%] mx-auto flex flex-wrap md:flex-nowrap my-20 gap-5">
          <div className="w-full flex flex-col items-center md:w-1/3">
            <div className="text-3xl font-semibold">
              Crafted with excellent material.
            </div>
            <div className="mt-3">
              Skillfully fashioned from premium materials, embodying quality and
              precision in every detail.
            </div>
            <button className="bg-[#2F2F2F] mt-7 text-white rounded-full px-5 py-2">
              Explore
            </button>
          </div>
          <div className="flex flex-wrap md:flex-nowrap">
            {apiData.map((item, index) => (
              <Card
                linkTo={item.linkTo}
                productName={item.name}
                productPrice={item.price}
                productImage="/public/featured/product-1.png"
                overlayColor={item.overlayColor}
                overlayOpacity={item.overlayOpacity}
                showIcon={true}
                className="w-"
              />
            ))}
          </div>
        </div>
        <div className="w-[95%] mx-auto flex my-10">
          <div className="w-full flex  flex-wrap lg:flex-nowrap gap-14 ">
            <div className="w-full lg:w-[50%]">
              <div className=" px-10">
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
        <div>
<img src="/featured/choose.png" alt="" />
        </div>
          </div>
        </div>
        <div className="w-[85%] mx-auto gap-8 flex flex-wrap md:flex-nowrap my-28">
          <div className="flex">
            <img
              src="https://png.pngtree.com/png-clipart/20231014/original/pngtree-toy-teddy-bear-in-brown-color-png-image_13300050.png"
              alt=""
              className="w-32 h-32"
            />
            <div className="">
              <h1 className="font-bold">Baby Doll Toy</h1>
              <p>
              Experience joy with our Baby Doll Toy collection.
              </p>
              <Link>Read More</Link>
            </div>
          </div>
          <div className="flex">
            <img
              src="https://png.pngtree.com/png-vector/20220603/ourlarge/pngtree-rag-doll-toy-wrist-png-image_4843361.png"
              alt=""
              className="w-32 h-32"
            />
            <div>
              <h1 className="font-bold">Girl Baby Toy </h1>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <Link>Read More</Link>
            </div>
          </div>
          <div className="flex">
            <img
              src="https://png.pngtree.com/element_our/png_detail/20181113/isometric-kid-toy-png_236063.jpg"
              alt=""
              className="w-32 h-32"
            />
            <div>
              <h1 className="font-bold">Dog Toy</h1>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <Link>Read More</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-5 text-4xl ">
          <h1>Testimonials</h1>
        </div>
        <div className="my-10">
          <SimpleSlider testimonials={dummyTestimonials} />
        </div>
        <div className="my-20  w-[85%] mx-auto ">
          <div className="flex justify-between ">
            <div className="font-semibold text-4xl">Recent Blog</div>
            <div>
              <Link className="border-b-2 border-black">View All Posts</Link>
            </div>
          </div>
          <div className=" flex gap-10 mt-14 justify-center flex-wrap   md:flex-nowrap">
            <RecentBlog
              imageUrl="https://m.media-amazon.com/images/I/51u3J4tZpSL._SL500_.jpg"
              title="New Baby Essentials"
              author="Bob"
              date="march 19, 2024"
              link="/blog/first-time-home-owner-ideas"
            />
            <RecentBlog
              imageUrl="	https://m.media-amazon.com/images/I/51Ty-AQerBL._SL500_.jpg"
              title="New Baby Essentials"
              author="Bob"
              date="march 19, 2024"
              link="/blog/first-time-home-owner-ideas"
            />
            <RecentBlog
              imageUrl="https://m.media-amazon.com/images/I/51bhuTrVWZL._SL500_.jpg"
              title="New Baby Essentials"
              author="Bob"
              date="march 19, 2024"
              link="/blog/first-time-home-owner-ideas"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
