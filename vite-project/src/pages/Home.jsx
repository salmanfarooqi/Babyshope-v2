// import React from "react";
// import Layout from "../components/Layout";
// import HomeBanner from "../components/HomeBannar"
// import Card from "../components/Card"

// const Home = () => {
//   const CardData = [
//     {
//       className: "",
//       linkTo: "cart.html",
//       productName: "Nordic Chair",
//       productPrice: "£50.00",
//       productImage: "/featured/product-1.png",
//       overlayColor: "#DCE5E4",
//       overlayOpacity: "20",
//     },
//     {
//       className: "",
//       linkTo: "cart.html",
//       productName: "Nordic Chair",
//       productPrice: "£50.00",
//       productImage: "/featured/product-1.png",
//       overlayColor: "#DCE5E4",
//       overlayOpacity: "20",
//     },
//     {
//       className: "",
//       linkTo: "cart.html",
//       productName: "Nordic Chair",
//       productPrice: "£50.00",
//       productImage: "/featured/product-1.png",
//       overlayColor: "#DCE5E4",
//       overlayOpacity: "20",
//     },
//   ];

//   let handleClick=()=>{
//     console.log("product id is ",productId)
//   }
//   return (
//     <Layout>
//       <HomeBanner
//         title="Cutting Edge Interior Design Studio"
//         description="Cutting Edge Interior Design Studio: Where creativity meets precision. Elevate your space with innovative design concepts tailored to your unique style."
//         buttonText1="Shop Now"
//         buttonText2="Explore"
//         imageUrl="/public/featured/couch.png"
//       />

//       <div className="w-[90%] mx-auto flex my-10">
//         <div>
//           <div className="text-2xl font-semibold">
//             Crafted with excellent material.
//           </div>
//           <div>
//             Skillfully fashioned from premium materials, embodying quality and
//             precision in every detail.
//           </div>
//           <button className="bg-[#2F2F2F] text-white rounded-lg px-3 py-2">
//             Explore
//           </button>
//         </div>
//         <div className="flex ">
//           {CardData.map((item, index) => (
//             <Card
       
//               productName={item.productName}
//               productPrice={item.productPrice}
//               productImage={item.productImage}
//               overlayColor={item.overlayColor}
//               overlayOpacity={item.overlayOpacity}
//               showIcon={true}
//               className="w-"
//               onBuyClick={handleClick}
//             />
//           ))}
//         </div>
    
//       </div>
//     </Layout>
//   );
// };

// export default Home;


import React from "react";
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBannar";
import Card from "../components/Card";

const Home = () => {
  const CardData = [
    {
      productId: 1,
      linkTo: "cart.html",
      productName: "Nordic Chair",
      productPrice: "£50.00",
      productImage: "/featured/product-1.png",
      overlayColor: "#DCE5E4",
      overlayOpacity: "20",
    },
    {
      productId: 2,
      linkTo: "cart.html",
      productName: "Nordic Chair",
      productPrice: "£50.00",
      productImage: "/featured/product-1.png",
      overlayColor: "#DCE5E4",
      overlayOpacity: "20",
    },
    {
      productId: 3,
      linkTo: "cart.html",
      productName: "Nordic Chair",
      productPrice: "£50.00",
      productImage: "/featured/product-1.png",
      overlayColor: "#DCE5E4",
      overlayOpacity: "20",
    },
  ];

  const handleClick = (productId) => {
    console.log("Product id is ", productId);
    alert(productId)
    // You can perform further actions here, such as navigating to a product page
  };

  return (
    <Layout>
      <HomeBanner
        title="Cutting Edge Interior Design Studio"
        description="Cutting Edge Interior Design Studio: Where creativity meets precision. Elevate your space with innovative design concepts tailored to your unique style."
        buttonText1="Shop Now"
        buttonText2="Explore"
        imageUrl="/public/featured/couch.png"
        Button1Classname="bg-[#F9BF29]"
        Button2Classname="border-[#9DACA0] border-2"
      />

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
              key={index}
              productId={item.productId} 
              productName={item.productName}
              productPrice={item.productPrice}
              productImage={item.productImage}
              overlayColor={item.overlayColor}
              overlayOpacity={item.overlayOpacity}
              showIcon={true}
              className="w-full"
              onBuyClick={handleClick}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

