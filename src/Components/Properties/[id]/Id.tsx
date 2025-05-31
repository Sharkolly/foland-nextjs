'use client'
import { useEffect, useState } from "react";
import { useQuerySinglePropertyFunction } from "@/Components/Hooks/useQuery";
import "react-loading-skeleton/dist/skeleton.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButtonGroup from "@/Components/Functions/CarouselBtn/CarouselBtn";
import { useContextStore } from "@/Components/Store/Context";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import NoProperty from "@/Components/Static/NoProperty";
import "react-loading-skeleton/dist/skeleton.css";

type imageType = {
  path: string;
  hash: string;
  uploadedAt: string;
};

type ownershipDetailsType = {
  titleDocument: string;
  ownershipType: "Leasehold" | "Freehold";
  propertyID: number;
};

type propertiesType = {
  _id: string;
  uuid: string;
  title: string;
  description: string;
  propertyType: "For Sale" | "For Rent";
  property: string;
  state: string;
  owner: string;
  price: string;
  purpose: string;
  location: string;
  bedroom: number;
  bathroom: number;
  landSize: string;
  isLandlordLivingWithTenant: string;
  ownershipDetails: ownershipDetailsType[];
  images: imageType[];
  saved: boolean;
};

const PlaceholderCard = () => (
  <div className="p-4 border rounded shadow h-[90vh] space-y-2 mb-4">
    {/* <Skeleton height={20} width={150} /> */}
    {/* <Skeleton height={15} count={2} /> */}
    <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
      <Skeleton height={150} className="w-full" />
      <Skeleton height={150} className="w-full" />
      <Skeleton height={150} className="w-full" />
      <Skeleton height={150} className="w-full" />
      {/* <Skeleton height={200} count={2} /> */}
    </div>
    <div className="flex flex-col gap-5 max-md:gap-3">
      <div className="flex flex-col gap-5 max-md:gap-3">
        <Skeleton height={20} width={250} />
        <Skeleton height={20} className="w-full" />
        <Skeleton height={15} count={2} />
        <div className="flex justify-between max-md:flex-col">
          <div className="flex flex-col gap-5 max-md:gap-3">
            <Skeleton height={20} width={300} />
            <Skeleton height={15} width={300} />
            <Skeleton height={20} width={300} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PropertyId = ({ id }: { id: string }) => {
  const router = useRouter();

  const navigateToMessage = (
    propertyOwner: string | undefined,
    userID: string | undefined,
    propertyId: string | undefined,
    propertyTitle: string | undefined,
    propertyPrice: string | undefined
  ) => {
    router.push(`/chats/chat?landlordId=${propertyOwner}&tenantId=${userID}?propertyId=${propertyId}&title=${propertyTitle}&
          price=${propertyPrice}`);
  };

  // Mock property data (this would typically come from an API)
  const property = {
    title: "Beautiful 4 Bedroom House",
    description:
      "This spacious house is located in a prime area with modern amenities and luxurious finishes.",
    images: [
      "https://via.placeholder.com/600x400/0000FF/808080?text=Image+1",
      "https://via.placeholder.com/600x400/0000FF/808080?text=Image+2",
      "https://via.placeholder.com/600x400/0000FF/808080?text=Image+3",
      "https://via.placeholder.com/600x400/0000FF/808080?text=Image+4",
    ],
    price: "$250,000",
    location: "Downtown City",
    state: "California",
    squareMeters: "1200 sqft",
    propertyId: "1234-5678-91011",
    ownershipDetails: "Private Owner",
    titleDocument: "Available",
    propertyType: "house", // Can be 'house' or 'land'
    houseDetails: {
      bedrooms: 4,
      bathrooms: 3,
    },
    landDetails: {
      purpose: "Residential", // Can be 'Residential', 'Agriculture', etc.
    },
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [singleProperty, setSingleProperty] = useState<propertiesType | null>(
    null
  );

  const { data, isLoading } = useQuerySinglePropertyFunction(`/property/${id}`);
  useEffect(() => {
    setSingleProperty(data?.property);
    console.log(data);
  }, [data]);

  const { user } = useContextStore();

  return (
    <div className="">
      {isLoading ? (
        Array.from({ length: 1 }).map((_, i) => <PlaceholderCard key={i} />)
      ) : !singleProperty ? (
        <NoProperty />
      ) : (
        <div className=" min-h-screen ">
          <div className="container mx-auto py-10 px-6">
            {/* Property Images Carousel */}
            <div className="relative ">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                customButtonGroup={<CustomButtonGroup />}
                containerClass="carousel-container rounded-lg w-full"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                dotListClass="custom-dot-list-style "
                itemClass="carousel-item-padding-40-px"
              >
                {singleProperty?.images?.map((image, index) => (
                  <div key={index} className="aspect-w-16 aspect-h-9">
                    <Image
                      width={300}
                      height={200}
                      className="h-[400px] object-cover  object-center w-full  opacity-[.80]"
                      src={image.path}
                      alt="Single Property"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Property Details */}
            <div className="mt-6">
              <h1 className="text-3xl font-bold">{singleProperty?.title}</h1>
              <p className="mt-4 text-lg"> {singleProperty?.description}</p>

              {/* Additional Property Info */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                  <h2 className="text-xl font-semibold">Price</h2>
                  <p>{singleProperty?.price}</p>
                </div>
                <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                  <h2 className="text-xl font-semibold">Location</h2>
                  <p>{singleProperty?.location}</p>
                </div>
                <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                  <h2 className="text-xl font-semibold">Square Meters</h2>
                  <p>{singleProperty?.landSize}</p>
                </div>
                <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                  <h2 className="text-xl font-semibold">Ownership</h2>
                  <p>{property.ownershipDetails}</p>
                </div>
                <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                  <h2 className="text-xl font-semibold">Title Document</h2>
                  <p>{property.titleDocument}</p>
                </div>
                <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                  <h2 className="text-xl font-semibold">Property ID</h2>
                  <p>{property.propertyId}</p>
                </div>
                <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                  <h2 className="text-xl font-semibold">Property Lease</h2>
                  <p>{singleProperty?.propertyType}</p>
                </div>
                <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                  <h2 className="text-xl font-semibold">Property</h2>
                  <p>{singleProperty?.property}</p>
                </div>
                <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                  <h2 className="text-xl font-semibold">State</h2>
                  <p>{singleProperty?.state} State</p>
                </div>
              </div>
              <div className="p-4">
                {singleProperty?.ownershipDetails?.map((ownerDetail, index) => (
                  <div
                    key={index}
                    className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                      <h2 className="text-xl font-semibold">Title Document</h2>
                      <p> {ownerDetail?.titleDocument}</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                      <h2 className="text-xl font-semibold">Ownership Type</h2>
                      <p> {ownerDetail?.ownershipType}</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                      <h2 className="text-xl font-semibold">Property ID</h2>
                      <p> {ownerDetail?.propertyID}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Conditional Rendering for House or Land Details */}
              {property.propertyType === "house" ? (
                <div className="mt-6">
                  <h2 className="text-2xl font-semibold">House Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                    <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                      <h3 className="text-xl font-semibold">Bedrooms</h3>
                      <p>{property.houseDetails.bedrooms}</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                      <h3 className="text-xl font-semibold">Bathrooms</h3>
                      <p>{property.houseDetails.bathrooms}</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                      <h3 className="text-xl font-semibold">
                        Landlord living with tenants
                      </h3>
                      <p> {singleProperty?.isLandlordLivingWithTenant}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-6">
                  <h2 className="text-2xl font-semibold">Land Details</h2>
                  <div className="bg-white p-4 rounded shadow-lg text-center cursor-pointer">
                    <h3 className="text-xl font-semibold">Purpose</h3>
                    <p>{property.landDetails.purpose}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {user?.userProfile?.role === "Tenant" ? (
        <button
          onClick={() =>
            navigateToMessage(
              singleProperty?.owner,
              user?.userProfile?._id,
              singleProperty?._id,
              singleProperty?.title,
              singleProperty?.price
            )
          }
          // `/chats/${singleProperty?.owner}/${user?.userProfile?._id}`
          className="bg-navy-blue text-white rounded-lg px-4 py-3"
        >
          Message Owner{" "}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default PropertyId;
