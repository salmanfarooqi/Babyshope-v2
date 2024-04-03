import React from "react";
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBannar";
import Card from "../components/Card";
import BillingDetails from "../components/BillingDetails";
import CouponCode from "../components/CouponCode";

const Checkout = () => {
  return (
    <Layout>
      <HomeBanner title="Checkout" />

      <div className="w-full flex justify-center items-center bg-slate-200">
      <div className="w-[80%] mt-10 ">
      <div className="border border-gray-300 rounded-sm py-5 px-10">
      <span className=" flex text-gray-700 gap-1">Returning customer? <p className="text-black underline hover:no-underline cursor-pointer"> Click here </p> to login</span>
      </div>
      <div className="w-full flex justify-between mt-10">
      <div className="w-[48%]">
        <BillingDetails/>
        </div>
        <div className="w-[48%]">
        <CouponCode/>
        </div>
      </div>
     

      </div>

      </div>

    </Layout>
  );
};

export default Checkout;
