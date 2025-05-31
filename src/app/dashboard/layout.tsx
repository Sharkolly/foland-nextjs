import WithNav from "@/Components/Layout/WithNav";
import SideBar from "@/Components/Static/SideBar";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Foland Realty",
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

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <WithNav>
      <SideBar />
      <main
        className="ml-[90px] z-[-99] rounded-lg w-[93%] mx-auto  max-xl:ml-[28%] max-xl:w-[73%] max-lg:ml-[35%] 
        max-md:w-[95%] max-md:mx-auto py-4 px-5 max-md:py-0 max-md:px-0 max-md:mb-[120px]"
      >
        {children}{" "}
      </main>
    </WithNav>
  );
};

export default layout;
