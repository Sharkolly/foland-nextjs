/* eslint-disable @typescript-eslint/no-unused-vars */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Popular from "../Images/icons/popular_red.svg";
import Love from "../Images/icons/Favorited.svg";
import Liked from "../Images/icons/Full-Favorite.svg";
import Bed from "../Images/icons/Bed.svg";
import BathRoom from "../Images/icons/Bath.svg";
import SquareMeter from "../Images/icons/Square Meters.svg";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AxiosError } from "axios";
import {
  useMutationSavePropertyFunction,
  useQuerySavedPropertyFunction,
  useQueryUserSavedPropertyFunction,
} from "../Hooks/useQuery";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import NoProperty from "../Static/NoProperty";
import CustomButtonGroup from "../Functions/CarouselBtn/CarouselBtn";
import { propertiesType, imageType, itemType } from "../Types/property.types";
import { UserSavedPropertiesType,  } from "../Types/user.types";

const PlaceholderCard = () => (
  <div className="p-4 border rounded shadow space-y-2 mb-4">
    <Skeleton height={20} width={150} />
    <Skeleton height={15} count={2} />
  </div>
);

const LoadingPlaceholder = () => {
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
  const [properties, setProperties] = useState<UserSavedPropertiesType[] | []>(
    []
  );
  const [savedProperties, setSavedProperties] = useState(new Set());
  const { mutateAsync } = useMutationSavePropertyFunction();

  const { data, isLoading } = useQueryUserSavedPropertyFunction(
    "/property/user-saved-property"
  );

  const { data: PropertySaved } = useQuerySavedPropertyFunction(
    "/property/saved-property"
  );

  const toggleLikeBtn = async (propertyId: string) => {
    try {
      const updateToggle = await mutateAsync(propertyId);
      if (savedProperties.has(propertyId)) {
        savedProperties.delete(propertyId);
      } else {
        savedProperties.add(propertyId);
      }
      toast.success(updateToggle.message);
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError?.response?.data?.message || "An unexpected error occurred.";
    }
  };

  useEffect(() => {
    setProperties(data?.userSavedProperties || null);
    const savedIds = new Set(
      PropertySaved?.savedProperties?.map((item: itemType) => item.property)
    );

    setSavedProperties(savedIds);
  }, [data, PropertySaved]);

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
        <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
          {properties?.map(({ property }, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-br-md rounded-bl-md basis-[410px] cursor-pointer shadow-xl"
              >
                {/* <div className="grid grid-cols-2 gap-"> */}
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
                      to={`/properties/${property?._id}`}
                      className="relative"
                      key={index}
                    >
                      <img
                        loading="lazy"
                        src={image?.path}
                        className="h-[400px] object-cover object-center w-full  opacity-[.80]"
                        alt="property? Image"
                      />
                      <img
                        src={Popular}
                        className="absolute hidden -bottom-[22px] -left-[7px]"
                        alt="Popular Icon"
                      />
                    </Link>
                  ))}
                </Carousel>
                {/* </div> */}

                <div className="px-9 my-6 max-md:px-4 max-xl:px-6">
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/properties/${property?._id}`}
                      className="font-bold text-2xl text-[#111111] "
                    >
                      {property?.price}{" "}
                      <span className="text-[.7em] font-normal opacity-90 ">
                        {property?.propertyType == "For Sale"
                          ? "/For Sale"
                          : "/year"}
                      </span>
                    </Link>
                    <div onClick={() => toggleLikeBtn(property?._id)}>
                      <img
                        src={savedProperties.has(property?._id) ? Liked : Love}
                        alt="Love Icon"
                      />
                    </div>
                  </div>
                  <Link
                    to={`/properties/${property?._id}`}
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
                    to={`/properties/${property?._id}`}
                    className="mt py-5 flex justify-between items-center opacity-[.8]"
                  >
                    <div className="flex gap-2 max-md:gap-1 items-center">
                      <img src={Bed} alt="Bed Icon" />
                      <p className="max-md:text-[.8em]">
                        {property?.bedroom} Beds
                      </p>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 items-center">
                      <img src={BathRoom} alt="Bathroom Icon" />
                      <p className="max-md:text-[.8em]">
                        {property?.bathroom} Bathrooms
                      </p>
                    </div>
                    <div className="flex gap-2 max-md:gap-1 items-center max-sm:hidden">
                      <img src={SquareMeter} alt="Square Meteres Icons" />
                      <p className="max-md:text-[.8em]">
                        {property?.landSize}
                        <span className="align-super text-sm">2</span>{" "}
                      </p>
                    </div>
                  </Link>
                </div>
                <div>
                  <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                  >
                    Prev
                  </button>
                  <span>
                    {" "}
                    Page {page} of {totalPages}{" "}
                  </span>
                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                  >
                    Next
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LoadingPlaceholder;
