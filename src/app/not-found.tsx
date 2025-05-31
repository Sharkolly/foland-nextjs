import WithNavAndFooter from "@/Components/Layout/WithNavAndFooter";
import Link from "next/link";

import  { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found - Foland Realty",
  description:
    "Learn more about Foland Realty - where innovation meets real estate innovation",
  keywords: [
    "real estate",
    "Foland",
    "Property",
    "rental",
    "about",
    "house",
    "shortlet",
    "land",
  ],
};


const Error = () => {
  return (
    <>
    <WithNavAndFooter>
      <div className="w-full py-20 border-b-2 ">
        <div className="w-11/12 mx-auto text-center  flex flex-col gap-10 max-md:gap-7">
          <h1 className="text-6xl font-bold max-lg:text-5xl max-md:text-[1.7em] max-sm:text-2xl">
            404 - PAGE NOT FOUND
          </h1>
          <h2 className="text-3xl max-md:text-2xl">We are Sorry</h2>
          <p>The page you&apos;re trying to access is not available</p>
          <button className="bg-navy-blue text-white px-6 py-2.5 max-lg:w-[30%] max-md:w-[50%] rounded-md w-[15%] mx-auto ">
            <Link href="/">Go Home</Link>
          </button>
        </div>
      </div>
    </WithNavAndFooter>
    </>
  );
};

export default Error;
