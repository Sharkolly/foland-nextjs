import AboutLayout from "@/Components/About/AboutLayout";
import  { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Foland Realty",
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

const page = () => {
  return<>

   <AboutLayout />;


</>
};

export default page;
