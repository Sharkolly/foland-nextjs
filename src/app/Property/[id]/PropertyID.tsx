/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useQuerySinglePropertyFunction } from "../../Hooks/useQuery";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import CustomButtonGroup from "../../Functions/CarouselBtn/CarouselBtn";
// import NoProperty from "../../Static/NoProperty";

// type imageType = {
//   path: string;
//   hash: string;
//   uploadedAt: string;
// };

// type ownershipDetailsType = {
//   titleDocument: string;
//   ownershipType: "Leasehold" | "Freehold";
//   propertyID: number;
// };

// type propertiesType = {
//   _id: string;
//   uuid: string;
//   title: string;
//   description: string;
//   propertyType: "For Sale" | "For Rent";
//   property: string;
//   state: string;
//   price: string;
//   purpose: string;
//   location: string;
//   bedroom: number;
//   bathroom: number;
//   landSize: string;
//   isLandlordLivingWithTenant: string;
//   ownershipDetails: ownershipDetailsType[];
//   images: imageType[];
//   saved: boolean;
// };

// const PlaceholderCard = () => (
//   <div className="p-4 border rounded shadow h-[90vh] space-y-2 mb-4">
//     {/* <Skeleton height={20} width={150} /> */}
//     {/* <Skeleton height={15} count={2} /> */}
//     <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
//       <Skeleton height={150} className="w-full" />
//       <Skeleton height={150} className="w-full" />
//       <Skeleton height={150} className="w-full" />
//       <Skeleton height={150} className="w-full" />
//       {/* <Skeleton height={200} count={2} /> */}
//     </div>
//     <div className="flex flex-col gap-5 max-md:gap-3">
//       <div className="flex flex-col gap-5 max-md:gap-3">
//         <Skeleton height={20} width={250} />
//         <Skeleton height={20} className="w-full" />
//         <Skeleton height={15} count={2} />
//         <div className="flex justify-between max-md:flex-col">
//           <div className="flex flex-col gap-5 max-md:gap-3">
//             <Skeleton height={20} width={300} />
//             <Skeleton height={15} width={300} />
//             <Skeleton height={20} width={300} />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const PropertyID = () => {
//   const { id } = useParams();
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//       // slidesToSlide: 4 // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 764 },
//       items: 1,
//       // slidesToSlide: 2 // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 764, min: 0 },
//       items: 1,
//       // slidesToSlide: 1 // optional, default to 1.
//     },
//   };
//   const [singleProperty, setSingleProperty] = useState<propertiesType | null>(
//     null
//   );

//   const { data, isLoading } = useQuerySinglePropertyFunction(`/property/${id}`);
//   useEffect(() => {
//     setSingleProperty(data?.property);
//     console.log(data);
//   }, [data]);
//   return (
//     <div className="">
//       {isLoading ? (
//         Array.from({ length: 1 }).map((_, i) => <PlaceholderCard key={i} />)
//       ) : !singleProperty ? (
//         <NoProperty />
//       ) : (
//         <div className="w-[98%] flex flex-col gap-8 ">
//           {/* <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1"> */}
//           <Carousel
//             swipeable={true}
//             draggable={true}
//             showDots={true}
//             responsive={responsive}
//             infinite={true}
//             autoPlay={true}
//             autoPlaySpeed={4000}
//             keyBoardControl={true}
//             customTransition="all .5"
//             transitionDuration={500}
//             customButtonGroup={<CustomButtonGroup />}
//             containerClass="carousel-container w-full"
//             removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
//             dotListClass="custom-dot-list-style "
//             itemClass="carousel-item-padding-40-px"
//           >
//             {singleProperty?.images?.map((image, index) => (
//               <div key={index} className="aspect-w-16 aspect-h-9">
//                 <img
//                   className="h-[400px] object-cover  object-center w-full  opacity-[.80]"
//                   src={image.path}
//                   alt="Single Property"
//                 />
//               </div>
//             ))}
//           </Carousel>
//           {/* </div> */}

//           <div className="flex flex-col gap-5 max-md:gap-3">
//             <div className="flex flex-col gap-5 max-md:gap-3">
//               <h2 className="text-3xl font-bold max-md:text-2xl">
//                 Title: {singleProperty?.title}
//               </h2>
//               <p className="text-lg">
//                 Description: {singleProperty?.description}
//               </p>
//               <div className="flex justify-between max-md:flex-col">
//                 <div className="flex flex-col gap-5 max-md:gap-3">
//                   <p className="text-lg">Price: {singleProperty?.price}</p>
//                   <p className="text-lg">
//                     Location: {singleProperty?.location}
//                   </p>
//                   <p className="text-lg">
//                     State: {singleProperty?.state} State
//                   </p>
//                   <p className="text-lg">
//                     Land Size: {singleProperty?.landSize}
//                   </p>
//                   <p className="text-lg">
//                     Landlord living with tenants:{" "}
//                     {singleProperty?.isLandlordLivingWithTenant}
//                   </p>
//                 </div>
//                 <div className="w-[2px] max-md:hidden h-auto bg-navy-blue"></div>
//                 <div className=" text-right max-md:text-left flex flex-col gap-5 max-md:gap-3">
//                   {singleProperty?.property === "House" ? (
//                     <div className="flex flex-col gap-5 max-md:gap-3">
//                       <p className="text-lg">
//                         Bedrooms: {singleProperty?.bedroom}
//                       </p>
//                       <p className="text-lg">
//                         Bathrooms: {singleProperty?.bathroom}
//                       </p>
//                       <p className="text-lg">
//                         Property Lease: {singleProperty?.propertyType}
//                       </p>
//                       <p className="text-lg">
//                         Property: {singleProperty?.property}
//                       </p>
//                     </div>
//                   ) : (
//                     <div>
//                       <p className="text-lg">
//                         Best Purpose: {singleProperty?.purpose}
//                       </p>
//                     </div>
//                   )}
//                   {singleProperty?.ownershipDetails?.map(
//                     (ownerDetail, index) => (
//                       <div
//                         key={index}
//                         className="flex flex-col gap-5 max-md:gap-3"
//                       >
//                         <p className="text-lg">
//                           Title Documents Available:{" "}
//                           {ownerDetail?.titleDocument}
//                         </p>
//                         <p className="text-lg">
//                           PropertyID: {ownerDetail?.propertyID}
//                         </p>
//                         <p className="text-lg">
//                           Ownership Type: {ownerDetail?.ownershipType}
//                         </p>
//                       </div>

//                     )
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertyID;
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuerySinglePropertyFunction } from "../../Hooks/useQuery";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButtonGroup from "../../Functions/CarouselBtn/CarouselBtn";
import NoProperty from "../../Static/NoProperty";
import { useContextStore } from "../../Store/Context";
import { useNavigate } from "react-router-dom";

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

const PropertyDetails = () => {
  const { id } = useParams(); // Get property ID from URL params
  // to={`/chats/${singleProperty?.owner}/${user?.userProfile?._id}`}
  const navigate = useNavigate();

  const navigateToMessage = (
    propertyOwner: string | undefined,
    userID: string | undefined,
    propertyId: string | undefined,
    propertyTitle: string | undefined,
    propertyPrice: string | undefined
  ) => {
    navigate(`/chats/${propertyOwner}/${userID}`, {
      state: {
        propertyId: propertyId,
        title: propertyTitle,
        price: propertyPrice,
      },
    });
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
                    <img
                      loading="lazy"
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

export default PropertyDetails;
