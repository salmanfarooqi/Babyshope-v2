import { useState } from "react";
import Dropdown from "./DropDown";

function BillingDetails() {
  const handleSelect = (item) => {
    console.log(item);
  };

  const dropdownProps = {
    selected: "Select a Country",
    className: "",
    onSelect: handleSelect,
    items: [
      { label: "Pakistan", option: "Pakistan" },
      { label: "India", option: "India" },
      { label: "Bangladash", option: "Bangladash" },
      { label: "Iraq", option: "Iraq" },
      { label: "Iran", option: "Iran" },
      { label: "Iraq", option: "Iraq" },
      { label: "Iran", option: "Iran" },
    ],
  };

  const [showAccountCreation, setShowAccountCreation] = useState(false);
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);

  const toggleShippingAddress = () => {
    setShipToDifferentAddress(!shipToDifferentAddress);
  };

  const toggleAccountCreation = () => {
    setShowAccountCreation(!showAccountCreation);
  };
  return (
    <div className="w-full py-10 border-gray-300 border px-10 rounded-sm text-[#6A6A6A]">
      <div className="flex flex-col">
        <label>Country *</label>
        <Dropdown
          {...dropdownProps}
          className="rounded-lg bg-white border border-gray-400"
        />
      </div>
      <div className="flex w-full justify-between ">
        <div className="flex flex-col w-[48%]">
          <label>First Name *</label>
          <input
            type="text"
            className=" py-2 px-1 border border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label>Last Name *</label>
          <input
            type="text"
            className=" py-2 px-1 border border-gray-400 rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label>Company Name</label>
        <input
          type="text"
          className="py-2 px-1 border border-gray-400 rounded-lg"
        />
      </div>

      <div className="flex flex-col w-full">
        <label>Address *</label>
        <input
          type="text"
          className="py-2 px-1 border border-gray-400 rounded-lg"
          placeholder="Street Address"
        />
      </div>
      <div className="flex flex-col w-full mt-4">
        {/* <label>Address *</label> */}
        <input
          type="text"
          className="py-2 px-1 border border-gray-400 rounded-lg"
          placeholder="Apartment, Suite, Unit ,etc.(Optional)"
        />
      </div>
      <div className="flex w-full justify-between ">
        <div className="flex flex-col w-[48%]">
          <label>State / Country *</label>
          <input
            type="text"
            className=" py-2 px-1 border border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label>Posta / Zip *</label>
          <input
            type="text"
            className=" py-2 px-1 border border-gray-400 rounded-lg"
          />
        </div>
      </div>

      <div className="flex w-full justify-between ">
        <div className="flex flex-col w-[48%]">
          <label>Email Address *</label>
          <input
            type="text"
            className=" py-2 px-1 border border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label>Phone *</label>
          <input
            type="text"
            className=" py-2 px-1 border border-gray-400 rounded-lg"
          />
        </div>
      </div>

   
      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          id="terms_conditions"
          onChange={toggleAccountCreation}
        />
        <label htmlFor="terms_conditions">Create an account?</label>
      </div>
      {showAccountCreation && (
        <div>
          <p>
            Create an account by entering the information below. If you are a returning customer please login at the top of the page.
          </p>
          <div className="flex flex-col w-full mt-4">
            <label>Account Password</label>
            <input
              type="password"
              className="py-2 px-1 border border-gray-400 rounded-lg"
            />
          </div>
        </div>
      )}


      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          id="ship_to_different_address"
          onChange={toggleShippingAddress}
        />
        <label htmlFor="ship_to_different_address">Ship To A Different Address?</label>
      </div>
      
      {/* Different shipping address section */}
      {shipToDifferentAddress && (
        <div>
          <div className="flex flex-col">
            <label>Country *</label>
            <Dropdown
              {...dropdownProps}
              className="rounded-lg bg-white border border-gray-400"
            />
          </div>
          <div className="flex w-full justify-between ">
        <div className="flex flex-col w-[48%]">
          <label>First Name *</label>
          <input
            type="text"
            className=" py-2 px-1 border border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label>Last Name *</label>
          <input
            type="text"
            className=" py-2 px-1 border border-gray-400 rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label>Company Name</label>
        <input
          type="text"
          className="py-2 px-1 border border-gray-400 rounded-lg"
        />
      </div>

      <div className="flex flex-col w-full">
        <label>Address *</label>
        <input
          type="text"
          className="py-2 px-1 border border-gray-400 rounded-lg"
          placeholder="Street Address"
        />
      </div>
      <div className="flex flex-col w-full mt-4">
        {/* <label>Address *</label> */}
        <input
          type="text"
          className="py-2 px-1 border border-gray-400 rounded-lg"
          placeholder="Apartment, Suite, Unit ,etc.(Optional)"
        />
      </div>
      <div className="flex w-full justify-between ">
        <div className="flex flex-col w-[48%]">
          <label>State / Country *</label>
          <input
            type="text"
            className=" py-2 px-1 border border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label>Posta / Zip *</label>
          <input
            type="text"
            className=" py-2 px-1 border border-gray-400 rounded-lg"
          />
        </div>
      </div>

      <div className="flex w-full justify-between ">
        <div className="flex flex-col w-[48%]">
          <label>Email Address *</label>
          <input
            type="text"
            className=" py-2 px-1 border border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label>Phone *</label>
          <input
            type="text"
            className=" py-2 px-1 border border-gray-400 rounded-lg"
          />
        </div>
      </div>
        </div>
      )}

      <div className="mt-5">
        <textarea className="w-full h-24 border border-gray-400 rounded-md py-2 px-1" placeholder="Write your notes here.."/>
      </div>
    </div>
  );
}

export default BillingDetails;
