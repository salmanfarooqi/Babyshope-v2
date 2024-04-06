import React from "react";
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBannar";
import ContactUsCard from "../components/ContactUsCard";

function ContactForm() {
  return (
    <Layout>
      <>
        <HomeBanner
          title="contact us"
          description="Cutting Edge Interior Design Studio: Where creativity meets precision. Elevate your space with innovative design concepts tailored to your unique style."
          buttonText1="Shop Now"
          buttonText2="Explore"
          imageUrl="/public/featured/couch.png"
          Button1Classname="bg-[#F9BF29]"
          Button2Classname="border-[#9DACA0] border-2"
        />
        <div className="bg-[#EFF2F1] py-10">
          <div className="container mx-auto">
            <div className="block">
              <div className="flex justify-center">
                <div className="w-full md:w-8/12 lg:w-8/12 pb-4">
                  <div className="py-10">
                    <ContactUsCard />
                  </div>
                  <form className="w-full px-10 md:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                      <div>
                        <label
                          className="text-sm text-gray-600"
                          htmlFor="fname"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          className="block w-full border rounded-xl border-gray-300  py-3 px-3 mt-1 focus:outline-none focus:border-blue-400"
                          id="fname"
                          required
                        />
                      </div>
                      <div>
                        <label
                          className="text-sm text-gray-600"
                          htmlFor="lname"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          className="block w-full rounded-xl border border-gray-300  py-3 px-3 mt-1 focus:outline-none focus:border-blue-400"
                          id="lname"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600" htmlFor="email">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="block w-full border  border-gray-300 rounded-xl py-3 px-3 mt-1 focus:outline-none focus:border-blue-400"
                        id="email"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="text-sm text-gray-600"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        name=""
                        className="block w-full border border-gray-300 rounded-xl py-2 px-3 mt-1 focus:outline-none focus:border-blue-400"
                        id="message"
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#3B5D50] mt-8  text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default ContactForm;
