import React from 'react'
import Layout from '../components/Layout'
import HomeBannar from '../components/HomeBannar'
import ChooseUsCard from '../components/ChooseUsCard'
import Card from '../components/Card'

const AboutUs = () => {
    const CardData = [
        {
          className: "",
          linkTo: "cart.html",
          productName: "Nordic Chair",
          productPrice: "£50.00",
          productImage: "/featured/product-1.png",
          overlayColor: "#DCE5E4",
          overlayOpacity: "20",
        },
        {
          className: "",
          linkTo: "cart.html",
          productName: "Nordic Chair",
          productPrice: "£50.00",
          productImage: "/featured/product-1.png",
          overlayColor: "#DCE5E4",
          overlayOpacity: "20",
        },
        {
          className: "",
          linkTo: "cart.html",
          productName: "Nordic Chair",
          productPrice: "£50.00",
          productImage: "/featured/product-1.png",
          overlayColor: "#DCE5E4",
          overlayOpacity: "20",
        },
      ];
    return (
        <Layout>
            <div>
                <HomeBannar

                    title="About us"
                    description="Cutting Edge Interior Design Studio: Where creativity meets precision. Elevate your space with innovative design concepts tailored to your unique style."
                    buttonText1="Shop Now"
                    buttonText2="Explore"
                    imageUrl="/public/featured/couch.png"
                    Button1Classname="bg-[#F9BF29]"
                    Button2Classname="border-[#9DACA0] border-2"
                > </HomeBannar>

<div className="w-[90%] mx-auto flex my-10">
        <div>
          <div className="text-2xl font-semibold">
            Crafted with excellent material.
          </div>
          <div>
            Skillfully fashioned from premium materials, embodying quality and
            precision in every detail.
          </div>
          <button className="bg-[#2F2F2F] text-white rounded-lg px-3 py-2">
            Explore
          </button>
        </div>
        <div className="flex ">
          {CardData.map((item, index) => (
            <Card
              linkTo={item.linkTo}
              productName={item.productName}
              productPrice={item.productPrice}
              productImage={item.productImage}
              overlayColor={item.overlayColor}
              overlayOpacity={item.overlayOpacity}
              showIcon={true}
              className="w-"
            />
          ))}
        </div>
      
      </div>

                <div className='flex '>
                <ChooseUsCard className="mt-8" title="Fast & Free Shipping" imageSrc={"/featured/img-grid-2.jpg"} />
                <ChooseUsCard className="mt-8" title="Fast & Free Shipping" imageSrc={"/featured/img-grid-2.jpg"} />
                </div>

               
            </div>
        </Layout>
    )
}

export default AboutUs