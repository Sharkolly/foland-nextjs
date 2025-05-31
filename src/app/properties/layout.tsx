// import WithNav from "@/Components/Layout/WithNav";
import SideBar from "@/Components/Static/SideBar";
import React from "react";
import { Metadata } from "next";
import { cookies } from "next/headers";
import WithNavAndFooter from "@/Components/Layout/WithNavAndFooter";

export const metadata: Metadata = {
  title: "View Properties - Foland Realty",
  description:
    "Discover verified property listings on Foland Realty – from apartments to houses across Nigeria. Rent or buy your next home with ease and confidence.",
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

const layout = async ({ children }: { children: React.ReactNode }) => {
  const getToken = await (await cookies());
  const token = getToken?.get('token')?.value;
  console.log('token baby' , token);
  return (
    <WithNavAndFooter>
      <SideBar />
      <main
        className="ml-[90px] z-[-99] rounded-lg w-[93%] mx-auto  max-xl:ml-[28%] max-xl:w-[73%] max-lg:ml-[35%] 
        max-md:w-[95%] max-md:mx-auto py-4 px-5 max-md:py-0 max-md:px-0 max-md:mb-[120px]"
      >
        {children}{" "}
      </main>
    </WithNavAndFooter>
  );
};

export default layout;
