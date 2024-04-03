/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = ({
  selected,
  className,
  selectedItemClassName,
  iconClassName,
  items,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    label: "",
    option: "",
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item);
  };

  useEffect(() => {
    const defSelect = items?.filter((item) => item?.option === selected);
    if (defSelect && defSelect?.length > 0) {
      setSelectedItem(defSelect[0]);
    } else {
      setSelectedItem({ label: selected, option: selected });
    }
  }, [selected, items]);

  return (
    <div
      className={`relative 0 w-full px-3 py-2 ${className}`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedItem?.label}
        <FaCaretDown  className={`w-4 h-4 ${
            isOpen ? `rotate-180 ${iconClassName}` : ""
          } transition-all duration-300 ease-in-out`}/>
        {/* <Image
          src={require("../../public/down-arrow.png")}
          alt=""
          className={`w-4 h-4 ${
            isOpen ? `rotate-180 ${iconClassName}` : ""
          } transition-all duration-300 ease-in-out`}
        /> */}
      </div>
      {isOpen && (
        <div
          className={`absolute top-full left-0 mt-1 bg-white rounded-md shadow-light w-full ${
            items.length > 5 ? "h-48 overflow-y-auto" : ""
          }`}
        >
          <ul>
            {items?.map((item, index) => (
              <li
                key={index}
                className={`py-2 px-4 cursor-pointer hover:bg-gray-100 ${
                  selectedItem === item
                    ? `bg-gray-100 font-semibold ${selectedItemClassName}`
                    : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item?.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
