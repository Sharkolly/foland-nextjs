import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../Images/1-removebg-preview.png";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

const Footer = () => {

  return (
    <div>
      {/* <div className=""> */}
        <div className="w-10/12 mx-auto text-navy-blue my-16 flex justify-between max-lg:w-[91%] max-md:flex-col max-md:gap-10 max-md:my-10">
          <div className="max-xl:basis-[30%] max-lg:basis-[23%] max-md:border-b-2 max-md:pb-7 max-md:border-slate-100 ">
            <div className="flex gap-3 items-center max-lg:flex-col max-lg:items-start max-md:flex-row">
              <div className="w-[30%] max-md:w-[25%]">
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <p className="font-bold text-xl max-lg:text-lg">Foland Realty</p>
            </div>
          </div>
          <div className="flex-col flex gap-14 max-md:flex-row max-md:gap-16 max-md:border-b-2 max-md:pb-7 max-md:border-slate-100 max-sm:gap-8">
            <div>
              <h2 className=" font-bold text-xl">SELL A HOME</h2>
              <div className="flex flex-col gap-3.5 mt-4 ">
                <Link to="/">Request an offer</Link>
                <Link to="/">Pricing</Link>
                <Link to="/">Reviews</Link>
                <Link to="/">Stories</Link>
              </div>
            </div>
            <div>
              <h2 className=" font-bold text-xl">BUY A HOME</h2>
              <div className="flex flex-col gap-3.5 mt-4 ">
                <Link to="/">Buy</Link>
                <Link to="/">Finance</Link>
              </div>
            </div>
          </div>
          <div className="flex-col flex gap-14 max-md:border-b-2 max-md:pb-7 max-md:border-slate-100">
            <div>
              <h2 className=" font-bold text-xl">
                BUY, RENT AND SELL
              </h2>
              <div className="flex flex-col gap-3.5 mt-4 ">
                <Link to="/">Buy and sell properties</Link>
                <Link to="/">Rent home</Link>
                <Link to="/">Builder trade up</Link>
              </div>
            </div>
            <div>
              <h2 className=" font-bold text-xl">
                TERMS & PRIVACY
              </h2>
              <div className="flex flex-col gap-3.5 mt-4">
                <Link to="/">Trust & Safety</Link>
                <Link to="/">Terms of Service</Link>
                <Link to="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="flex-col flex gap-14 max-md:flex-row max-md:gap-16 max-md:border-b-2 max-md:pb-7 max-md:border-slate-100">
            <div>
              <h2 className="font-bold text-xl">ABOUT</h2>
              <div className="flex flex-col gap-3.5 mt-4 ">
                <Link to="/">Company</Link>
                <Link to="/">How it works</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Investors</Link>
              </div>
            </div>
            <div>
              <h2 className=" font-bold text-xl">RESOURCES</h2>
              <div className="flex flex-col gap-3.5 mt-4 ">
                <Link to="/">Giudes</Link>
                <Link to="/">FAQ</Link>
                <Link to="/">Help Center</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <hr className="w-full h-[2px] text-slate-400 pb-7 " />

          <div className="w-10/12 mx-auto max-md:w-[91%] flex justify-between pb-10 max-md:flex-col max-md:gap-5 max-md:items-center">
            <div className="text-slate-400 max-sm:text-[.9em]">
              <p>&copy;2025 Foland Realty. All rights reserved.</p>
            </div>

            <div className="text-slate-400 text-2xl flex gap-10 items-center max-md:text-xl ">
              <Link to="/" className="hover:text-semi-navy-blue max-md:hover:text-slate-400">
                <FaFacebook />
              </Link>
              <Link
                to="https://wa.me/+2347035439642"
                className="hover:text-green-500 max-md:hover:text-slate-400"
              >
                <IoLogoWhatsapp />
              </Link>
              <Link to="/" className="hover:text-red-500 max-md:hover:text-slate-400">
                <MdEmail />
              </Link>
              <Link to="/" className="hover:text-black max-md:hover:text-slate-400">
                <FaXTwitter />
              </Link>
              <Link to="/" className="hover:text-red-700 max-md:hover:text-slate-400">
                <GrInstagram />
              </Link>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Footer;
