import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import HomeBannar from "../components/HomeBannar";
import Card from "../components/Card";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

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

  const [apiData, setApiData] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/product");
        console.log("data", response.data);
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  
  const addToCart = async (productId) => {
    try {
      const response = await axios.post("http://localhost:9000/add-to-cart", {
        productId: productId,
        userId: localStorage.getItem("userId"),
      });
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="bg-[#EFF2F1]">
      <Layout>
        <HomeBannar
          title="Shop"
          description="At Baby Shop, we specialize in providing the best products and care for your precious bundle of joy.Welcome to Baby Shop, where we bring joy and comfort to your little one's world"
          Button1Classname="bg-[#F9BF29]"
        Button2Classname="border-[#9DACA0] border-2"
            buttonText1="Shop Now"
          buttonText2="Explore"
          className="h-[290px]  px-10"
          imageUrl="/public/Shoptools/image-8.png"

        />
        <div className="w-full flex justify-center items-center mt-20">
          <div className="w-[90%] flex ">
            <div className="w-full flex flex-wrap gap-4 justify-center items-center mb-32 ">
              {/* {data.map((item, index) => (
                <Card
                  key={index}
                  className="!w-[240px]"
                  productName={item.name} 
                  productPrice={item.price} 
                  productImage={item.image} 
                  showIcon={true}
                />
              ))} */}
              {apiData.map((item, index) => (
                <Card
                  key={index}
                  className="!w-[240px]"
                  productName={item.name} 
                  productPrice={item.price} 
                  productImage={item.imageUrl} 
                  showIcon={true}
                  addToCart={() => addToCart(item._id)} // Pass addToCart function with productId as argument
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
      <ToastContainer />
      ;
    </div>
  );
}

export default Shop;
