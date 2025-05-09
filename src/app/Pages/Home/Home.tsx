// import { NavLink } from "react-router-dom";
// import Testing from "../Custom/Testing";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from "../../Images/Modern house design in Nigeria 🇳🇬.jpg";
import Image1Man from "../../Images/man-in-home-img.png";
import Image2 from "../../Images/Nigeria’s luxury home markets soared in 2021, record increase in sale prices.jpg";
import Image3 from "../../Images/Beautiful Box Type Kerala House Design 3 Storey House Design, House  FEE.jpg";
import Image4 from "../../Images/Home 🇳🇬.jpeg";
import Image5 from "../../Images/3ee98586-f578-4dfe-9f7a-99578c6279cd.jpeg";
import Apostrophe from "../../Images/icons/home-testimonial.svg";
import Renters from "../../Images/icons/home-icon-50k.svg";
import Properties from "../../Images/icons/home-icon-10k.svg";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../../Props/Button";

type filterPropertyType = "Rent" | "Sell" | "Buy";

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      // slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 1,
      // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      // slidesToSlide: 1 // optional, default to 1.
    },
  };

  const [filterProperty, setFilterProperty] =
    useState<filterPropertyType>("Rent");

  const rent = () => setFilterProperty("Rent");
  const buy = () => setFilterProperty("Buy");
  const sell = () => setFilterProperty("Sell");

  const slideShowDetails = [
    {
      image: Image1,
      title: "Buy, Rent or Sell Your Property Easily",
      description:
        "Skip the complicated process and high fees. Buy, rent, or sell properties effortlessly with our trusted platform—quick, secure, and commission-free.",
      clientSay:
        "I loved how smooth the move was, and finally got the house we wanted.",
      clientName: "Manuel Villa",
      clientPurchaseStatus: "Renter",
      savedUpTo: "$1,500",
      processedTime: "-24hours",
      clientImage: Image1Man,
    },
    {
      image: Image2,
      title: "Buy Your Dream Home with Confidence",
      description:
        "Searching for the perfect house? Our platform connects you to top listings with transparent pricing, secure transactions, and zero hassle!",
      clientSay:
        "I finally found the perfect home at the best price! The process was seamless and secure.",
      clientName: "David Johnson",
      clientPurchaseStatus: "Home Buyer",
      savedUpTo: "$3,500",
      processedTime: "-72 hours",
      clientImage: Image1Man,
    },
    {
      image: Image3,
      title: "Hassle-Free Renting for Your Perfect Home",
      description:
        "Find and rent your ideal home with ease! Browse verified listings, connect with trusted landlords, and move in quickly—no hidden fees, no stress.",
      clientSay:
        "Renting has never been this simple! I found a great apartment and moved in within days.",
      clientName: "Aisha Bello",
      clientPurchaseStatus: "Renter",
      savedUpTo: "$1,500",
      processedTime: "-24 hours",
      clientImage: Image1Man,
    },
    {
      image: Image4,
      title: "Invest in Land, Secure Your Future",
      description:
        "Buy verified land with peace of mind! Whether for investment or development, our platform ensures safe, reliable, and fast land acquisitions.",
      clientSay:
        "I secured a plot of land in a prime location without any hidden costs—100% legit!",
      clientName: "Samuel Chukwu",
      clientPurchaseStatus: "Land Buyer",
      savedUpTo: "$5,100",
      processedTime: "-5 days",
      clientImage: Image1Man,
    },
    {
      image: Image5,
      title: "Your One-Stop Real Estate Marketplace",
      description:
        "From buying and renting homes to acquiring land and commercial properties, Foland Realty makes real estate transactions smooth, fast, and stress-free!",
      clientSay:
        "Whether buying, selling, or renting, Foland Realty has made my real estate journey effortless!",
      clientName: "Sandra Williams",
      clientPurchaseStatus: "Seller & Buyer",
      savedUpTo: "$2,600",
      processedTime: "-1 Week",
      clientImage: Image1Man,
    },
  ];

  return (
    <div className="">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        // deviceType={['desktop',"tablet", "mobile" ]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {slideShowDetails.map((slide, index) => (
          <div
            key={index}
            className="bg-cover bg-center w-full relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${slide.image})`,
            }}
          >
            <div className="w-10/12 mx-auto max-md:w-[90%]">
              <div className="flex flex-col pt-16 max-xl:pt-12 max-md:pt-8 pb-8 gap-2">
                <motion.div className="w-full flex flex-col gap-3">
                  <h1 className="text-white w-[63%] text-[3.5em] leading-tight tracking-wide font-bold pb-3 max-xl:w-[60%] max-xl:tracking-normal max-xl:text-[3em] max-lg:w-full  max-lg:text-[3em] max-md:text-[2.7em]">
                    {slide.title}
                  </h1>
                  <p className="text-white w-[54%] text-lg opacity font-light max-lg:w-full max-md:text-[.99em]">
                    {slide.description}
                  </p>

                  <div className="hidden max-md:block">
                    <button className="bg-semi-navy-blue text-white px-5 py-2 rounded-md mt-3">
                      <Link to="/view-properties">View Properties</Link>
                    </button>
                  </div>

                  <div className="mt-3 max-xl:mt-12 max-md:mt-6 max-lg:mt-9">
                    <div className=" flex w-full ">
                      <p
                        onClick={rent}
                        className={` ${
                          filterProperty === "Rent"
                            ? "border-b-4"
                            : "border-b-1"
                        } py-4 bg-white px-9 rounded-tl-md font-bold  border-navy-blue text-navy-blue max-lg:px-6`}
                      >
                        Rent
                      </p>
                      <p
                        onClick={buy}
                        className={` ${
                          filterProperty === "Buy" ? "border-b-4" : "border-b-1"
                        } py-4 bg-white px-9 font-bold  border-navy-blue text-navy-blue max-lg:px-6`}
                      >
                        Buy
                      </p>
                      <p
                        onClick={sell}
                        className={` ${
                          filterProperty === "Sell"
                            ? "border-b-4"
                            : "border-b-1"
                        } py-4 bg-white px-9 rounded-tr-md font-bold  border-navy-blue text-navy-blue max-lg:px-6`}
                      >
                        Sell
                      </p>
                    </div>

                    <div className="flex max-lg:flex-col">
                      <div className="bg-white py-4 border-none rounded-bl-lg px-8 max-lg:px-6 max-lg:rounded-bl-none max-lg:rounded-tr-lg">
                        <p className="opacity-80 text-lg">Location</p>
                        <h3 className="text-lg font-bold max-md:text-[1.1em] max-lg:text-[1.5em]">
                          Barcelona, Spain
                        </h3>
                      </div>

                      <div className="flex items-center bg-white justify-center">
                        <div className="w-[2px] h-[45px] bg-slate-300 rounded-lg max-lg:w-full max-lg:h-[2px]"></div>
                      </div>

                      <div className="bg-white border-none py-4 px-8 max-lg:w-full max-lg:px-6">
                        <p className="opacity-80 text-lg">When</p>
                        <h3 className="text-lg font-bold max-lg:w-full max-lg:text-[1.7em] max-md:text-[1.1em]">
                          Select Move-In Date{" "}
                          <input type="date" name="" id="" />{" "}
                        </h3>
                      </div>
                      <div className="flex items-center bg-white justify-center">
                        <div className="w-[2px] h-[45px] bg-slate-300 rounded-lg max-lg:w-full max-lg:h-[2px]"></div>
                      </div>

                      <div className="bg-white flex  border-none py-4 px-8 rounded-tr-lg rounded-br-lg max-lg:rounded-tr-none max-lg:rounded-b-lg max-lg:px-6">
                        <Button>
                          <Link to="/properties">Browse Properties</Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    // viewport={{ once: true }}
                    className="flex gap-24 mt-8 max-md:flex-col max-md:gap-16"
                  >
                    <div className="flex flex-col gap-4 ">
                      <img
                        src={Renters}
                        className="w-[60px]"
                        alt="Renters Icon"
                      />

                      <div className="">
                        <h1 className="text-xl text-white opacity-90 ">
                          {/* 50 */}
                          <CountUp start={0} end={50} duration={4} />
                          k+ Renters
                        </h1>
                        <p className="text-white text-lg opacity-70 max-md:text-sm max-md:w-full">
                          Believe in our service
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 ">
                      <img
                        src={Properties}
                        className="w-[60px]"
                        alt="Renters Icon"
                      />

                      <div className="">
                        <h1 className="text-xl text-white opacity-90">
                          {/* 10k+ */}
                          <CountUp start={0} end={10} duration={10} />
                          k+ Properties and Houses
                        </h1>
                        <p className="text-white text-lg opacity-70 max-md:text-sm">
                          Ready for Occupancy
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <div className="bg-white absolute w-[26%] top-[120px] px-8 py-6 rounded-md right-[80px] max-2xl:top-[33px] max-2xl:right-[30px]  max-2xl:w-[36%] max-lg:px-16 max-md:px-6 max-lg:static max-lg:w-[100%] max-md:scale-[1]">
              <div className="flex gap-4">
                <img
                  src={slide.clientImage}
                  className="w-[100px] h-[100px] max-2xl:w-[80px]  max-2xl:h-[80px]  max-lg:w-[75px] max-lg:h-[75px] max-md:w-[60px] max-lg:h-[60px]"
                  alt="client-image"
                />
                <div className="flex flex-col gap-1">
                  <h1 className="text-navy-blue font-bold text-2xl tracking-wide">
                    {slide.clientName}
                  </h1>
                  <p className="text-slate-700">{slide.clientPurchaseStatus}</p>
                  <p className="text-slate-700">
                    Moved with{" "}
                    <span className="text-semi-navy-blue font-bold tracking-wide">
                      Foland Realty
                    </span>{" "}
                  </p>
                </div>
              </div>

              <div className="my-5 flex gap-8">
                <img
                  src={Apostrophe}
                  className="w-[45px] h-[45px]"
                  alt="Apostrophe Testimonial"
                />
                <div className="">
                  <p className="leading-normal">{slide.clientSay}</p>
                </div>
              </div>

              <div className="bg-slate-300 w-full h-[2px]"></div>

              <div className="flex justify-between mt-5">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold text-navy-blue">
                    {slide.savedUpTo}
                  </h1>
                  <p className="text-slate-600 text-sm">Saved up to</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold text-navy-blue">
                    {slide.processedTime}
                  </h1>
                  <p className="text-slate-600 text-sm">Process Time</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
