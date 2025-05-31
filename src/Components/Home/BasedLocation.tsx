"use client";
import Link from "next/link";
import Rent from "@/Components/icons/rent.svg";
import All from "@/Components/icons/sel;.svg";
import Buy from "@/Components/icons/buy.svg";
import Search from "@/Components/icons/Search.svg";
import Popular from "@/Components/icons/popular_red.svg";
import Love from "@/Components/icons/Favorited.svg";
import Bed from "@/Components/icons/Bed.svg";
import BathRoom from "@/Components/icons/Bath.svg";
import SquareMeter from "@/Components/icons/Square Meters.svg";
import { useState } from "react";
import Button from "@/Components/Props/Button";
import Image from "next/image";

type filterPropertyType = "Rent" | "All" | "Buy";

const BasedLocation = () => {
  const [filterProperty, setFilterProperty] =
    useState<filterPropertyType>("Rent");

  const rent = () => setFilterProperty("Rent");
  const buy = () => setFilterProperty("Buy");
  const all = () => setFilterProperty("All");

  const housesProperty = [
    {
      houseName: "Palm Harbor",
      location: "2699 Green Valley, Highland Lake, FL",
      beds: 3,
      bathrooms: 2,
      squareMeters: "5x7",
      price: "$2,095",
      houseStatus: "Rent",
      RentReceivalPeriod: "month",
      image: "/images/firstHouse.png",
    },
    {
      houseName: "Beverly Springfield",
      location: "2821 Lake Sevilla, Palm Harbor, TX",
      beds: 4,
      bathrooms: 2,
      squareMeters: "6x7.5",
      price: "$2,700",
      houseStatus: "Rent",
      RentReceivalPeriod: "week",
      image:
        "/images/Beautiful-Box.jpg",
    },
    {
      houseName: "Faulkner Ave",
      location: "909 Woodland St, Michigan, IN",
      beds: 4,
      bathrooms: 3,
      squareMeters: "8x10",
      price: "$4,550",
      houseStatus: "Rent",
      RentReceivalPeriod: "year",
      image: "/images/secondHouse.png",
    },
    {
      houseName: "St. Crystal",
      location: "210 US Highway, Highland Lake, FL",
      beds: 4,
      bathrooms: 2,
      squareMeters: "5x7",
      price: "$2,400",
      houseStatus: "Rent",
      RentReceivalPeriod: "month",
      image: "/images/Modern-house.jpg",
    },
    {
      houseName: "Cove Red",
      location: "243 Curlew Road, Palm Harbor, TX",
      beds: 2,
      bathrooms: 1,
      squareMeters: "5x7.5",
      price: "$1,500",
      houseStatus: "Rent",
      RentReceivalPeriod: "year",
      image: "/images/thirdHouse.png",
    },
    {
      houseName: "Tarpon Bay",
      location: "2699 Green Valley, Highland Lake, FL",
      beds: 3,
      bathrooms: 1,
      squareMeters: "5x7",
      price: "$1,600",
      houseStatus: "Rent",
      RentReceivalPeriod: "week",
      image: "/images/Naija-house.jpeg",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, #ffffff, #F0EFFB)",
      }}
      className=" w-full mt-16 py-12 max-md:mt-6"
    >
      <div className="w-10/12 mx-auto max-md:w-[91%]">
        <div className="text-center flex flex-col gap-2 ">
          <h2 className="text-navy-blue font-bold text-4xl max-md:text-[27px]">
            Based On Your Location
          </h2>
          <p className="text-[.9em]">
            Some of our picked properties near your location
          </p>
        </div>

        <div className="flex justify-between items-center mt-12 max-md:mt-8 max-md:flex-col max-md:gap-3">
          <div className=" flex  border-2 rounded-md border-navy-blue px-1 py-1 bg-low-red max-md:w-full max-md:justify-between">
            <div
              onClick={rent}
              className={`${
                filterProperty === "Rent" ? "font-bold border-2 bg-white" : ""
              } flex gap-3   items-center px-5 py-3 rounded-md`}
            >
              <Image width={100} height={50} className='w-auto h-auto' src={Rent} alt="Rent Image" />
              <p className=" ">Rent</p>
            </div>
            <div
              onClick={buy}
              className={`${
                filterProperty === "Buy" ? "font-bold border-2 bg-white" : ""
              } flex gap-3   items-center px-5 py-3 rounded-md`}
            >
              <Image width={100} height={50} className='w-auto h-auto'  src={Buy} alt="Buy Image" />
              <p>Buy</p>
            </div>
            <div
              onClick={all}
              className={`${
                filterProperty === "All" ? "font-bold border-2 bg-white" : ""
              } flex gap-3   items-center px-5 py-3 rounded-md`}
            >
              <Image width={100} height={50} className='w-auto h-auto' src={All} alt="All Image" />
              <p>All</p>
            </div>
          </div>

          <div
            className="flex border-2 rounded-md border-navy-blue px-4 py-4 bg-low-red 
          max-md:w-full"
          >
            <Image width={100} height={50} className='w-auto h-auto' src={Search} alt="Search Icon" />
            <input
              type="search"
              className="border-none outline-none pl-4 pr-4 max-md:pr-0 max-md:w-full"
              placeholder="Lagos"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8  max-lg:grid-cols-1 max-2xl:grid-cols-2 mt-10">
          {housesProperty.map((house, index) => (
            <div
              key={index}
              className="bg-white rounded-br-md rounded-bl-md basis-[410px] hover:scale-[1.02] cursor-pointer shadow-xl max-md:hover:scale-[1]"
            >
              <div className="relative h-auto">
                <Image
                  width={300}
                  height={200}
                  src={house.image}
                  className="h-[200px] object-cover object-center w-full rounded-tr-md rounded-tl-md opacity-[.80]"
                  alt="firstHouse Image"
                />
                <Image
                  width={100}
                  height={50}
                  src={Popular}
                  className="absolute -bottom-[22px] -left-[7px]"
                  alt="Popular Icon"
                />
              </div>

              <div className="px-9 my-6 max-md:px-4">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-2xl text-[#111111] ">
                    {house.price}
                    <span className="text-[.7em] font-normal opacity-50 ">
                      /{house.RentReceivalPeriod}
                    </span>
                  </h2>
                  <Image
                    width={100}
                    height={50}
                    className="w-auto h-auto"
                    src={Love}
                    alt="Love Icon"
                  />
                </div>
                <div className="flex flex-col gap-3.5">
                  <h2 className="font-bold  text-semi-navy-blue text-2xl">
                    {house.houseName}
                  </h2>
                  {/* <h2 className="font-bold  text-semi-navy-blue text-2xl">{house.houseName}</h2 */}
                  <p className="opacity-50 text-[.9em] max-sm:text-[.9em]">
                    {house.location}
                  </p>
                  <div className="oapcity-50 w-full bg-slate-200 h-[2px]"></div>
                </div>
                <div className="mt-4 flex justify-between items-center opacity-[.8]">
                  <div className="flex gap-2 max-md:gap-1 items-center">
                    <Image
                      width={100}
                      height={50}
                      className="w-auto h-auto"
                      src={Bed}
                      alt="Bed Icon"
                    />
                    <p className="max-md:text-[.8em]">{house.beds} Beds</p>
                  </div>
                  <div className="flex gap-2 max-md:gap-1 items-center">
                    <Image
                      width={100}
                      height={50}
                      className="w-auto h-auto"
                      src={BathRoom}
                      alt="Bathroom Icon"
                    />
                    <p className="max-md:text-[.8em]">
                      {house.bathrooms} Bathrooms
                    </p>
                  </div>
                  <div className="flex gap-2 max-md:gap-1 items-center max-sm:hidden">
                    <Image
                      width={100}
                      height={50}
                      className="w-auto h-auto"
                      src={SquareMeter}
                      alt="Square Meteres Icons"
                    />
                    <p className="max-md:text-[.8em]">
                      {house.squareMeters} m
                      <span className="align-super text-sm">2</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button>
            <Link href="/properties">View More Properties</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasedLocation;
