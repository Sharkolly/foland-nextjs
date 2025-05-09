import { Link } from "react-router-dom";
import House from "../../Images/icons/About-us-diagram.svg";
import PropertyInsuranceIcon from "../../Images/icons/property insurance.svg";
import BestPriceIcon from "../../Images/icons/best-price.svg";
import LowestCommissionIcon from "../../Images/icons/commision.svg";
import OverallControlIcon from "../../Images/icons/control.svg";
import { motion } from "framer-motion";
import Button from "../../Props/Button";

const AboutUs = () => {
  const transition = { ease: "linear", duration: 0.6 };

  const AboutUsDetails = [
    {
      title: "Property Insurance",
      description:
        "We offer our customer property protection of liability coverage and insurance for their better life.",
      image: PropertyInsuranceIcon,
      y: -250,
      x: 0,
    },
    {
      title: "Best Price",
      description:
        "Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.",
      image: BestPriceIcon,
      x: 150,
      y: 0,
    },
    {
      title: "Lowest Commission",
      description:
        "You no longer have to negotiate commissions and haggle with other agents it only cost 2%!",
      image: LowestCommissionIcon,
      y: 250,
      x: 0,
    },
    {
      title: "Overall Control",
      description:
        "Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.",
      image: OverallControlIcon,
      x: 150,
      y: 0,
    },
  ];

  return (
    <div className=" mt-10 w-10/12 max-md:w-[91%] mx-auto flex">
      <div className="w-full flex gap-10 mt-10 max-lg:flex-col max-xl:gap-10 max-md:mt-2">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={transition}
          viewport={{ once: true }}
          className="bg-[#F7F7FD] w-[38%] pt-8 rounded-lg relative max-xl:pt-4 max-xl:w-[40%] max-lg:w-full"
        >
          {/* <div className="bg-[#F7F7FD] w-[35%] pt-8 rounded-lg relative h-[590px] max-md:h-[680px] max-xl:w-[40%] max-lg:w-full"> */}
          <motion.div className="px-9  flex flex-col gap-5 max-xl:gap-4 max-md:px-7">
            <h2 className="text-semi-navy-blue text-3xl font-bold">
              The New Way To Find Your New Home
            </h2>
            <p className="text-blue-600 z-[9] text-[.9em]  max-md:text-[.85em] max-md:text-black">
              Finding the perfect home has never been easier. With our seamless
              platform. Whether you're looking to rent, buy, or invest, we
              provide the tools to help you make informed decisions—without the
              hassle. Start your journey today and discover a smarter, faster
              way to find your dream home.
            </p>
            <div>
              <Button>
                <Link to="/properties">Browse Properties</Link>
              </Button>
            </div>
          </motion.div>

          {/* <div className="absolute bottom-0 right-0"> */}
          <div className="flex justify-end">
            <img src={House} className="max-xl:h-[160px]" alt="House Diagram" />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={transition}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 py-7 max-md:pb-0 pt-2 max-md:grid-cols-1 max-lg:grid-cols-2 max-2xl:grid-cols-2  w-[62%] max-lg:w-full"
        >
          {AboutUsDetails.map((item, index) => (
            <motion.div
              initial={{ x: item.x, opacity: 0, y: item.y }}
              whileInView={{ x: 0, opacity: 1, y: 0 }}
              transition={transition}
              viewport={{ once: true }}
              key={index}
              className=" max-md:border-b-2 max-md:border-gray-200 max-md:pb-7"
            >
              <div className=" gap-4">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-5 max-lg:flex-row max-lg:gap-2 max-lg:items-center">
                    <div className="max-sm:flex max-sm:justify-center">
                      <img
                        src={item.image}
                        className="w-[50px] h-[50px]"
                        alt={item.title}
                      />
                    </div>
                    <h2 className=" text-3xl font-bold max-xl:text-2xl">
                      {item.title}
                    </h2>
                  </div>
                  <p className="">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
