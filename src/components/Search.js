import React, { useContext } from "react";
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";

import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const { houses, handleClick } = useContext(HouseContext);
  console.log("hosues", houses);
  return (
    <div className="flex px-[30px] py-6 max-w-[1170px] mx-auto flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-violet-700 hover:bg-violet-800 transition w-full text-white text-center lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center font-bold text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
