import React from "react";
import Layout from "../components/Layout";
import HomeBannar from "../components/HomeBannar";
import Card from "../components/Card";

function Shop() {
  const data = [
    {
      name: "Nordic Chair",
      price: "£50.00",
      image: "/featured/product-1.png",
    },
    {
      name: "Nordic Chair",
      price: "£50.00",
      image: "/featured/product-2.png",
    },
    {
      name: "Nordic Chair",
      price: "£50.00",
      image: "/featured/product-3.png",
    },
    {
      name: "Nordic Chair",
      price: "£50.00",
      image: "/featured/sofa.png",
    },
    {
      name: "Nordic Chair",
      price: "£50.00",
      image: "/featured/product-1.png",
    },
    {
      name: "Nordic Chair",
      price: "£50.00",
      image: "/featured/product-2.png",
    },
    {
      name: "Nordic Chair",
      price: "£50.00",
      image: "/featured/product-3.png",
    },
    {
      name: "Nordic Chair",
      price: "£50.00",
      image: "/featured/sofa.png",
    },
  ];
  return (
    <div className="bg-[#EFF2F1]">
      <Layout>
        <HomeBannar
          title="Shop"
          //   Button1Classname="bg-black"
          //   Button2Classname="border-[#9DACA0] border-2"
          className="h-[220px]  px-10"
        />
        <div className="w-full flex justify-center items-center mt-20">
          <div className="w-[90%] flex ">
            <div className="w-full flex flex-wrap gap-4 justify-center items-center mb-32 ">
              {data.map((item, index) => (
                <Card
                  key={index}
                  className="w-[240px]"
                  productName={item.name} 
                  productPrice={item.price} 
                  productImage={item.image} 
                  showIcon={true}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
      ;
    </div>
  );
}

export default Shop;
