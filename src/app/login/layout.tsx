import  { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings - Foland Realty",
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
    <>
      {children}
    </>
  )
}

export default layout
