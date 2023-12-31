import { Menu } from "@headlessui/react";
import React, { useContext, useState } from "react";
import { HouseContext } from "./HouseContext";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiHome5Line,
  RiMapPinLine,
  RiWalkLine,
  RiWallet3Line,
} from "react-icons/ri";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 2200000",
    },
    {
      value: "10000 - 30000",
    },
    {
      value: "30000 - 40000",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Menu as="div" className="dropdown relative">
        <Menu.Button
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-btn w-full text-left"
        >
          <RiWallet3Line className="dropdown-icon-primary" />
          <div>
            <div className="text-[15px] font-medium leading-tight">{price}</div>
            <div className="text-[13px]">Select Price range</div>
          </div>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </Menu.Button>

        <Menu.Items className="dropdown-menu">
          {prices?.map((price, index) => {
            return (
              <Menu.Item
                onClick={() => setPrice(price?.value)}
                className="cursor-pointer hover:text-violet-700 transition"
                as="li"
                key={index}
              >
                {price?.value}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default PriceRangeDropdown;
