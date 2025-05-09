import Rent from "../Images/icons/rent.svg";
import Sell from "../Images/icons/sel;.svg";
import Buy from "../Images/icons/buy.svg";
import Search from "../Images/icons/Search.svg";
import { useState } from "react";
import LoadingPlaceholder from "./Loading";

type filterPropertyType = "Rent" | "All" | "Buy";

const SavedProperty = () => {
  const [filterProperty, setFilterProperty] =
    useState<filterPropertyType>("Rent");

  const rent = () => setFilterProperty("Rent");
  const buy = () => setFilterProperty("Buy");
  const all = () => setFilterProperty("All");

  return (
    <div className="">
      <div className="text-center flex flex-col gap-2 my-5 max-md:py-5">
        <h2 className="text-navy-blue font-bold text-4xl max-md:text-[27px]">
          Based On Your Location
        </h2>
        <p className="text-[.9em]">
          Some of our picked properties near your location
        </p>
      </div>

      <div className="flex justify-between items-center mt-12 max-md:mt-8 max-lg:flex-col max-lg:gap-5 mb-6">
        <div className=" flex  border-2 rounded-md border-navy-blue px-1 py-1 bg-low-red max-lg:w-full max-lg:justify-between">
          <div
            onClick={rent}
            className={`${
              filterProperty === "Rent" ? "font-bold border-2 bg-white" : ""
            } flex gap-3   items-center px-5 py-3 rounded-md`}
          >
            <img src={Rent} alt="Rent Image" />
            <p className="font-bold ">Rent</p>
          </div>
          <div
            onClick={buy}
            className={`${
              filterProperty === "Buy" ? "font-bold border-2 bg-white" : ""
            } flex gap-3   items-center px-5 py-3 rounded-md`}
          >
            <img src={Buy} alt="Buy Image" />
            <p>Buy</p>
          </div>
          <div
            onClick={all}
            className={`${
              filterProperty === "All" ? "font-bold border-2 bg-white" : ""
            } flex gap-3   items-center px-5 py-3 rounded-md`}
          >
            <img src={Sell} alt="All Image" />
            <p>All</p>
          </div>
        </div>

        <div
          className="flex border-2 rounded-md border-navy-blue px-4 py-4 bg-low-red 
        max-lg:w-full"
        >
          <img src={Search} alt="Search Icon" />
          <input
            type="search"
            className="border-none outline-none pl-4 pr-4 max-md:pr-0 max-md:w-full"
            placeholder="Lagos"
          />
        </div>
      </div>

      <LoadingPlaceholder />
    </div>
  );
};

export default SavedProperty;
