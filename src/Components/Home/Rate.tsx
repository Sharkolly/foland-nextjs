"use client";
import Virtual from "@/Components/icons/tour.svg";
import bestDeal from "@/Components/icons/best-deal.svg";
import lastDeal from "@/Components/icons/get.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Image from "next/image";

const Rate = () => {
  const transition = { ease: "linear", duration: 0.6 };

  const rateDetails = [
    {
      name: "Virtual home tour",
      description:
        "You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.",
      image: Virtual,
      bgColor: "white-half-opacity",
      textColor: "white",
    },
    {
      name: "Find the best deal",
      description:
        "Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!",
      image: bestDeal,
      bgColor: "white",
      textColor: "navy-blue",
    },
    {
      name: "Get ready to apply",
      description:
        "Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!",
      image: lastDeal,
      bgColor: "semi-navy-blue",
      textColor: "white",
    },
    {
      name: "Virtual home tour",
      description:
        "You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.",
      image: Virtual,
      bgColor: "white-half-opacity",
      textColor: "white",
    },
    {
      name: "Find the best deal",
      description:
        "Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!",
      image: bestDeal,
      bgColor: "white",
      textColor: "navy-blue",
    },
    {
      name: "Get ready to apply",
      description:
        "Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!",
      image: lastDeal,
      bgColor: "semi-navy-blue",
      textColor: "white",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1204 },
      items: 3,
      // slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1204, min: 764 },
      items: 2,
      // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      // slidesToSlide: 1 // optional, default to 1.
    },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index when slide changes
  const handleBeforeChange = (nextIndex: number) => {
    setActiveIndex(nextIndex);
  };

  return (
    <div className="bg-navy-blue text-white py-16 max-md:pt-10">
      <div className="w-10/12 mx-auto ">
        <div className="flex justify-between max-lg:flex-col max-lg:gap-7">
          <h2 className="text-4xl leading-snug font-bold">
            We make it easy for <br className="max-lg:hidden" />{" "}
            <span className="text-blue-500 ">Tenants</span> and{" "}
            <span className="text-blue-500">Landlords.</span>
          </h2>

          <p className="w-[34%] max-xl:w-[45%] max-lg:w-full tracking-wider leading-relaxed max-md:tracking-normal text-[1.1em] max-md:text-[.9em]">
            Whether it’s selling your current home, getting financing, or buying
            a new home, we make it easy and efficient. The best part? you’ll
            save a bunch of money and time with our services.
          </p>
        </div>
      </div>

      <div className="mt-16 max-xl:mt-10 max-md:mt-4">
        <div className="w-full  flex justify-start">
          <div className="w-[100%] max-xl:ml-0 max-lg:ml-0 ml-32 overflow-hidden">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              customTransition="transform 0.5s ease-in-out"
              transitionDuration={500}
              containerClass="carousel-container overflow-hidden"
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              beforeChange={handleBeforeChange}
              //  additionalTransfrom={-30} // Track active item
            >
              {rateDetails.map((rate_d, index) => (
                <div
                  key={index}
                  className={`w-full mx-auto flex justify-center transition-all duration-500 ${
                    index === activeIndex
                      ? "scale-110 opacity-100"
                      : "scale-90 opacity-80"
                  }`}
                >
                  <div
                    className={`py-10 px-7 flex gap-5 bg-${rate_d.bgColor} rounded-md`}
                  >
                    <div>
                      <Image
                        src={rate_d.image}
                        className="w-[200px] h-[60px]"
                        alt="home image"
                      />
                    </div>
                    <div
                      className={`text-${rate_d.textColor} flex flex-col gap-3`}
                    >
                      <h2 className="text-2xl font-bold">{rate_d.name}</h2>
                      <p>{rate_d.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="bg-stroke-grey w-full h-[2px] my-16 max-md:my-10"></div>

      <div className="flex w-10/12 mx-auto max-md:w-[90%] max-md:flex-col justify-center gap-16 text-center items-center max-md:gap-5">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-4xl font-bold max-md:text-2xl">
            <CountUp start={0.1} end={7.4} duration={5} decimals={1} />%
          </h2>
          <p className="opacity-75 text-[.9em]">Property Return Rate</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          viewport={{ once: true }}
          className="w-[2px] h-[50px] bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={transition}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-4xl font-bold max-md:text-2xl">
            <CountUp start={0} end={3856} duration={6} />
          </h2>
          <p className="opacity-75 text-[.9em]">Property in Sell & Rent</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          viewport={{ once: true }}
          className="w-[2px] h-[50px] bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-4xl font-bold max-md:text-2xl">
            <CountUp start={0} end={2540} duration={4} />
          </h2>
          <p className="opacity-75 text-[.9em]">Daily Completed Transactions</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Rate;
