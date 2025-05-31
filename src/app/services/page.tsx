import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foland Realty services",
  description:
    "Discover affordable and verified properties for sale or rent in Nigeria. Buy land, houses, and apartments with Foland Realty.",
  keywords: [
    "Real Estate Nigeria",
    "Foland Realty",
    "Property Management",
    "Houses for rent",
    "Landlord App",
    "Tenant Platform",
    "Shortlet Properties",
  ],
}

const page = () => {

    const image  = "/images/Modern-house.jpg"
  return (
    <div>
      <div
        className="bg-cover h-[540px] bg-center w-full relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${image})`,
        }}
      >
        Hello World
      </div>
    </div>
  );
};

export default page;
