import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBannar";
import BillingDetails from "../components/BillingDetails";
import CouponCode from "../components/CouponCode";
import YourOrder from "../components/YourOrder";

const Checkout = () => {
  return (
    <Layout>
      <HomeBanner title="Checkout" />

      <div className="w-full flex justify-center items-center bg-[#EFF2F1] py-24 text-[#6A6A6A]">
      <div className="w-[80%] mt-10 ">
      <div className="border border-gray-300 rounded-sm py-5 px-10">
      <span className=" flex text-[#6A6A6A] gap-1">Returning customer? <p className="text-black underline hover:no-underline cursor-pointer"> Click here </p> to login</span>
      </div>
      <div className="w-full flex justify-between mt-10">
      <div className="w-[49%]">
      <p className="font-bold text-3xl  py-3">Billing Details</p>
        <BillingDetails/>
        </div>
        <div className="w-[49%] flex flex-col">
        <p className="font-bold text-3xl  py-3">Coupon Code</p>
        <CouponCode/>
        <p className="font-bold text-3xl py-3 mt-8">Your Order</p>
        <YourOrder/>
        </div>
      </div>

    
     

      </div>

      </div>

    </Layout>
  );
};

export default Checkout;
