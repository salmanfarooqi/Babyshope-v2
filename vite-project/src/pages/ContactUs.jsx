import React from 'react';
import Layout from '../components/Layout';
import HomeBanner from "../components/HomeBannar";

function ContactForm() {
  return (
    <Layout>
        <>
         <HomeBanner
        title="Cutting Edge Interior Design Studio"
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

              <div className="flex items-center space-x-8 mb-5">
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="white" className="bg-[#3B5D50] p-2 rounded mr-2" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                  <p className="text-sm">43 Raymouth Rd. Baltemoer, London 3910</p>
                </div>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="white" className="bg-[#3B5D50] p-2 rounded mr-2" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                  </svg>
                  <p className="text-sm">info@yourdomain.com</p>
                </div>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="white" className="bg-[#3B5D50] p-2 rounded mr-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                  <p className="text-sm">+1 294 3925 3939</p>
                </div>
              </div>

              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600" htmlFor="fname">First name</label>
                    <input type="text" className="block w-full border rounded-xl border-gray-300  py-3 px-3 mt-1 focus:outline-none focus:border-blue-400" id="fname" required />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600" htmlFor="lname">Last name</label>
                    <input type="text" className="block w-full rounded-xl border border-gray-300  py-3 px-3 mt-1 focus:outline-none focus:border-blue-400" id="lname" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600" htmlFor="email">Email address</label>
                  <input type="email" className="block w-full border  border-gray-300 rounded-xl py-3 px-3 mt-1 focus:outline-none focus:border-blue-400" id="email" required />
                </div>
                <div>
                  <label className="text-sm text-gray-600" htmlFor="message">Message</label>
                  <textarea name="" className="block w-full border border-gray-300 rounded-xl py-2 px-3 mt-1 focus:outline-none focus:border-blue-400" id="message" cols="30" rows="5"></textarea>
                </div>

                <button type="submit" className="bg-[#3B5D50] mt-8  text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline">Send Message</button>
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
