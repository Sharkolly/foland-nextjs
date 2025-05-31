import SavedProperty from "@/Components/saved-properties/SavedProperty"
import  { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saved Properties - Foland Realty",
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
  return (
    <>
      <SavedProperty/>
    </>
  )
}

export default page
