/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Popular from "@/Components/icons/popular_red.svg";
import Love from "@/Components/icons/Favorited.svg";
import Liked from "@/Components/icons/Full-Favorite.svg";
import Bed from "@/Components/icons/Bed.svg";
import BathRoom from "@/Components/icons/Bath.svg";
import SquareMeter from "@/Components/icons/Square Meters.svg";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AxiosError } from "axios";

import {
  useMutationSaveForPropertyFunction,
  useMutationSavePropertyFunction,
  useQueryPropertyFunction,
  useQuerySavedPropertyFunction,
} from "../Hooks/useQuery";
import Link  from "next/link";
import { toast } from "react-toastify";
import { useContextStore } from "@/Components/Store/Context";
import NoProperty from "@/Components/Static/NoProperty";
import CustomButtonGroup from "@/Components/Functions/CarouselBtn/CarouselBtn";
import Image from "next/image";

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
  price: string;
  location: string;
  bedroom: number;
  bathroom: number;
  landSize: string;
  owner: string;
  isLandlordLivingWithTenant: string;
  ownershipDetails: ownershipDetailsType[];
  images: imageType[];
  saved: boolean;
};

type itemType = {
  property: string;
  owner: string;
};

const PlaceholderCard = () => (
  <div className="p-4 border rounded shadow space-y-2 mb-4">
    <Skeleton height={20} width={150} />
    <Skeleton height={15} count={2} />
  </div>
);

const PropertiesListing = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      // slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 1,
      // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      // slidesToSlide: 1 // optional, default to 1.
    },
  };
  const [properties, setProperties] = useState<propertiesType[] | []>([]);
  const [savedProperty, setSavedProperty] = useState<string[]>([]);
  const { mutateAsync } = useMutationSaveForPropertyFunction();
  const { user } = useContextStore();
  const { data, isLoading } = useQueryPropertyFunction(
    "/property/all-properties"
  );
  const { data: PropertySaved } = useQuerySavedPropertyFunction(
    "/property/saved-property"
  );

  useEffect(() => {
    if (data?.property) {
      setProperties(data?.property);
    }
    if (PropertySaved?.savedProperties) {
      //filter to have only the property id
      const newProperty = PropertySaved.savedProperties
        .filter((item: itemType) => item.owner === user?.userProfile?._id)
        .map((item: itemType) => item.property);
      setSavedProperty(newProperty);
    }
  }, [PropertySaved, user, data]);

  const toggleLikeBtn = async (propertyId: string) => {
    try {
      //update the save property
      const response = await mutateAsync(propertyId);
      // Update the savedProperty array state
      setSavedProperty((prev) => {
        if (response.message) {
          // If property is now saved, add it to the array if not already present
          return prev.includes(propertyId) ? prev : [...prev, propertyId];
        } else {
          // If property is now unsaved, remove it from the array
          return prev.filter((id) => id !== propertyId);
        }
      });
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An unexpected error occurred.";
      toast.error("Error saving property");
    }
  };

  // const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);

  return (
    <div>
      {isLoading ? (
        <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <PlaceholderCard key={i} />
          ))}
        </div>
      ) : properties?.length === 0 || !properties ? (
        <NoProperty />
      ) : (
        <div className="grid gap-4 grid-cols-1 xl:grid-cols-3">
          {properties?.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-br-md rounded-bl-md basis-[410px] cursor-pointer shadow-xl"
            >
              {/* <div className="grid grid-cols-2 gap-">
               */}
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                customButtonGroup={<CustomButtonGroup />}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={0}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={0}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                // deviceType={['desktop',"tablet", "mobile" ]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {property?.images?.map((image: imageType, index) => (
                  <Link
                
                    href={`/properties/${property?._id}`}
                    className="relative"
                    key={index}
                  >
                    <Image
                    width={1000}
                    height={700}
                      src={image?.path}
                      className="h-[400px] object-cover object-center w-full  opacity-[.80]"
                      alt="property? Image"
                    />
                    <Image width={200} height={100}
                      src={Popular}
                      className="absolute hidden -bottom-[22px] h-auto w-auto -left-[7px]"
                      alt="Popular Icon"
                    />
                  </Link>
                ))}
              </Carousel>
              {/* </div> */}

              <div className="px-9 my-6 max-md:px-4 max-xl:px-6">
                <div className="flex justify-between mb-4 items-center">
                  <Link
                    href={`/properties/${property?._id}`}
                    className="font-bold text-2xl text-green-600 "
                    // text-[#111111]
                  >
                    {property?.price}{" "}
                    <span className="text-[.7em] font-normal opacity-90 ">
                      {property?.propertyType == "For Sale"
                        ? "/For Sale"
                        : "/year"}
                      {/* /{property?.RentReceivalPeriod} */}
                    </span>
                  </Link>
                  <div onClick={() => toggleLikeBtn(property._id)}>
                    <Image width={200} height={100} className='h-auto w-auto'
                      src={savedProperty.includes(property._id) ? Liked : Love}
                      alt="Love Icon"
                    />
                  </div>
                </div>
                <Link
                  href={`/properties/${property?._id}`}
                  className="flex flex-col gap-3.5"
                >
                  <h2 className="font-bold  text-semi-navy-blue text-xl">
                    {property?.title}{" "}
                    <span className="text-gray-700 text-md">
                      {" "}
                      ( {property?.propertyType} )
                    </span>
                  </h2>
                  <p className="opacity-50 text-[.9em] max-sm:text-[.9em]">
                    {property?.location}
                  </p>
                  <div className="oapcity-50 w-full bg-slate-200 h-[2px]"></div>
                </Link>
                <Link
                  href={`/properties/${property?._id}`}
                  className="mt py-5 flex justify-between items-center opacity-[.8]"
                >
                  <div className="flex gap-2 max-md:gap-1 items-center">
                    <Image width={200} height={100} className='h-auto w-auto' src={Bed} alt="Bed Icon" />
                    <p className="max-md:text-[.8em]">
                      {property?.bedroom} Beds
                    </p>
                  </div>
                  <div className="flex gap-2 max-md:gap-1 items-center">
                    <Image width={200} height={100} className='h-auto w-auto' src={BathRoom} alt="Bathroom Icon" />
                    <p className="max-md:text-[.8em]">
                      {property?.bathroom} Bathrooms
                    </p>
                  </div>
                  <div className="flex gap-2 max-md:gap-1 items-center max-sm:hidden">
                    <Image width={200} height={100} className='h-auto w-auto' src={SquareMeter} alt="Square Meteres Icons" />
                    <p className="max-md:text-[.8em]">
                      {property?.landSize}
                      <span className="align-super text-sm">2</span>{" "}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertiesListing;
