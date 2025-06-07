import SideBar from "@/Components/Static/SideBar";
import React from "react";
import { Metadata } from "next";
import WithNavAndFooter from "@/Components/Layout/WithNavAndFooter";
import PhoneTabs from "@/Components/Static/PhoneTabs";
import AuthGuard from "@/Components/Auth/AuthGuard";

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
  // const getToken = await (await cookies());
  // const token = getToken?.get('token')?.value;

  return (
    <AuthGuard>
      <WithNavAndFooter>
        <SideBar />
        <main
          className="ml-[9%] z-[-99] rounded-lg w-[91%] mx-auto max-xl:ml-[12%] max-xl:w-[88%] max-lg:w-[85%] max-lg:ml-[12%] 
        max-md:w-[95%] max-md:mx-auto py-4 px-5 max-md:py-0 max-md:px-0 max-md:mb-[120px]"
        >
          {children}{" "}
        </main>
        <PhoneTabs />
      </WithNavAndFooter>
     </AuthGuard>
  );
};

export default layout;
