/* eslint-disable @typescript-eslint/no-unused-vars */
//   const triggerBrowserNotification = () => {
//     // Check for browser support
//     if (!('Notification' in window)) {
//       console.error('Browser does not support notifications.');
//       return;
//     }

//     // Notification content
//     const title = 'New Property Alert!';
//     const options: NotificationOptions = {
//       body: 'A 3-bedroom flat is now available in Lekki. Check it out!',
//       icon: '/assets/logo.png', // Use your logo or any image
//     };

//     // Check current permission
//     if (Notification.permission === 'granted') {
//       new Notification(title, options);
//     } else if (Notification.permission !== 'denied') {
//       Notification.requestPermission().then((permission) => {
//         if (permission === 'granted') {
//           new Notification(title, options);
//         } else {
//           console.warn('Notification permission denied.');
//         }
//       });
//     } else {
//       console.warn('Notification permission previously denied.');
//     }
//   };

//       {/* <button
//         onClick={triggerBrowserNotification}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Test Notification
//       </button> */}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQueryProfileFunction } from "../Hooks/useQuery";
import { UserDetailsObjectType } from "../Types/user.types";
import { useContextStore } from "../Store/Context";

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserDetailsObjectType | null>(null);

  //get date user joined format
  const date = user?.userProfile?.createdAt
    ? new Date(user?.userProfile?.createdAt).toDateString()
    : new Date(Date.now()).toDateString();

  const [profileCompletion, setProfileCompletion] = useState<number>(0);
  const { data } = useQueryProfileFunction("/user/user-details");
  const { theme } = useContextStore();

  useEffect(() => {
    setUser(data);
    let completion = 0;
    // if(user?.userProfile?.profilePicture) completion += 1;
    // if(user?.userProfile?.emailVerified) completion += 1;
    if (user?.userProfile?.phoneNumber) completion += 1;
    if (user?.userProfile?.firstName) completion += 1;
    if (user?.userProfile?.lastName) completion += 1;
    if (user?.userProfile?.email) completion += 1;
    if (user?.userProfile?.role) completion += 1;

    // get profileCompletion
    const profileCompletionStats = Math.ceil((completion / 6) * 100);
    setProfileCompletion(profileCompletionStats);
  }, [data]);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editValues, setEditValues] = useState();
  // const [editValues, setEditValues] = useState({
  //   firstName: user.firstName,
  //   lastName: user.lastName,
  //   email: user.email,
  //   phoneNumber: user.phoneNumber,
  //   password: "",
  //   confirmPassword: "",
  //   avatarUrl: user.avatarUrl,
  // });

  // const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setEditValues({ ...editValues, [name]: value });
  // };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const file = e.target.files[0];
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setEditValues({ ...editValues, avatarUrl: reader.result as string });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleSave = () => {
  //   if (editValues.password !== editValues.confirmPassword) {
  //     alert("Passwords do not match.");
  //     return;
  //   }

  //   setUser({
  //     ...user,
  //     firstName: editValues.firstName,
  //     lastName: editValues.lastName,
  //     email: editValues.email,
  //     phoneNumber: editValues.phoneNumber,
  //     avatarUrl: editValues.avatarUrl,
  //   });

  //   setIsEditing(false);
  // };

  // Shorten Email function
  const maskEmail = (email: string) => {
    const [username, domain] = email.split("@");    
    const visiblePart = username.slice(0, 3);
    const visibleEndingPart = username.slice(username.length - 3, username.length);
    return `${visiblePart}***${visibleEndingPart}@${domain}`;
  };
  return (
    // <div className="p-4 mx-auto space-y-6 max-md:p-0">
    <div className="pt-2 pb-7 mx-auto space-y-6 max-md:p-0">
      {/* <h1 className="text-3xl pl-10 font-bold text-navy-blue">My Profile</h1> */}

      {/* User Full Details */}
      <div className={`${theme ? 'bg-navy-blue' : 'bg-white'} px-10 pt-6 pb-10 max-md:px-7 rounded-lg shadow-md items-start flex flex-col lg:flex-row gap-7 max-md:gap-0`}>
        <div className="max-lg:flex max-lg:justify-center max-lg:w-full max-lg:mb-4 max-md:mb-8">
          {user?.userProfile?.profilePicture ? (
            <img
              src={user?.userProfile?.profilePicture}
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover border"
            />
          ) : (
            <div className="">
              <div
                title={`${user?.userProfile?.firstName} ${user?.userProfile?.lastName}`}
                className="cursor-pointer w-17 h-17  max-lg:w-30 max-lg:h-30  rounded-full bg-green-800 text-white flex justify-center items-center text-xl font-bold"
              >
                {user?.userProfile?.firstName[0]}
                {user?.userProfile?.lastName[0]}
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 space-y-3 max-md:space-y-6  text-left">
          <h2 className="text-xl font-semibold max-md:text-lg">
            Full Name:{" "}
            {user?.userProfile?.firstName
              ? user?.userProfile?.firstName
              : "Jacob Onasola"}{" "}
            {user?.userProfile?.lastName}
          </h2>
          <p className="text-gray-600 max-md:text-[1em] max-md:hidden block">
            Email:{" "}
            {user?.userProfile?.email
              ? user?.userProfile?.email
              : "jacobonasola@gmail.com"}
          </p>
          <p
            title={
              user?.userProfile?.email
                ? user?.userProfile?.email
                : "jacobonasola@gmail.com"
            }
            className="text-gray-600 max-md:text-[1em] max-md:block hidden"
          >
            Email:{" "}
            {user?.userProfile?.email
              ? maskEmail(user?.userProfile?.email)
              : maskEmail("jacobonasola@gmail.com")}
          </p>
          <p className="text-gray-600">
            Phone Number:{" "}
            {user?.userProfile?.phoneNumber
              ? user?.userProfile?.phoneNumber
              : "Not Provided"}
          </p>
          <p className="text-gray-600 capitalize">
            Role: {user?.userProfile?.role ? user?.userProfile?.role : "Tenant"}
          </p>
          <p className="text-gray-600">Date Joined: {date}</p>
          <p className="text-sm text-green-600">
            {/* {user?.verified ? "Verified" : "Unverified"} */}
          </p>
        </div>

        <div className="bg-navy-blue text-white px-4 max-md:w-full py-2 rounded hover:bg-blue-700 max-lg:hover:bg-blue-600 flex max-md:flex max-md:justify-center">
          <Link to="/profile/edit-profile">Edit Profile</Link>
        </div>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow text-center cursor-pointer">
          <h3 className="text-lg font-semibold">Profile Completion</h3>
          <p className="text-orange-700 text-2xl">{profileCompletion}%</p>
        </div>
        <Link
          to="/properties-added"
          className="bg-white p-4 rounded shadow text-center cursor-pointer"
        >
          <h3 className="text-lg font-semibold">Properties Added</h3>
          <p className="text-blue-400 text-2xl">
            {user?.userTotalProperty ? user?.userTotalProperty : 0}
          </p>
        </Link>
        <Link
          to="/properties-added"
          className="bg-white p-4 rounded shadow text-center cursor-pointer"
        >
          <h3 className="text-lg font-semibold">New Properties</h3>
          <p className="text-blue-400 text-2xl">
            {user?.userTotalProperty ? user?.userTotalProperty : 0}
          </p>
        </Link>
        <Link
          to="/saved-properties"
          className="bg-white p-4 rounded shadow text-center cursor-pointer"
        >
          <h3 className="text-lg font-semibold">Saved Property</h3>
          <p className="text-[#011627] text-2xl">
            {user?.userSavedTotalProperty ? user?.userSavedTotalProperty : 0}
          </p>
        </Link>
        <div className="bg-white p-4 rounded shadow text-center cursor-pointer">
          <h3 className="text-lg font-semibold">Bookings</h3>
          {/* <p className="text-blue-700 text-2xl">{user.bookings}</p> */}
          <p className="text-navy-blue text-2xl">10</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center cursor-pointer">
          <h3 className="text-lg font-semibold">Growth</h3>
          <p className="text-green-600 text-2xl">+15%</p>
        </div>
      </div>
      {/* User Bookings */}
      <div className="bg-white p-4 rounded shadow space-y-5">
        <h2 className="text-xl font-bold text-blue-700">My Bookings</h2>
        <ul className="space-y-1">
          <li className="border p-2 rounded">
            Property: Oceanview Apartment – Date: 2024-04-20 – Status: Confirmed
          </li>
          <li className="border p-2 rounded">
            Property: Cozy Loft – Date: 2024-05-10 – Status: Pending
          </li>
        </ul>
      </div>

      {/* User Notifications */}
      <div className="bg-white p-4 rounded shadow space-y-5">
        <h2 className="text-xl font-bold text-blue-700">Notifications</h2>
        <ul className="space-y-4">
          <li className="text-sm text-gray-700">
            🔔 New message from landlord.
          </li>
          <li className="text-sm text-gray-700">
            🔔 Your booking was confirmed.
          </li>
          <li className="text-sm text-gray-700">
            🔔 New property listed near you.
          </li>
        </ul>
      </div>

      {/* User Saved Properties */}
      <div className="bg-white p-4 rounded shadow space-y-5">
        <h2 className="text-xl font-bold text-blue-700">Saved Properties</h2>
        <ul className="flex flex-col gap-4">
          {!user?.userSavedProperty ? (
            <p className="text-[1em]">No Saved Property</p>
          ) : (
            user?.userSavedProperty?.map(({ property }, index) => (
              <Link key={index} to={`/properties/${property._id}`}>
                <li className="border p-2 rounded">
                  {property.title} - {property.price} -{" "}
                  {property.property === "House"
                    ? `${property.bedroom} Beds`
                    : property.purpose}{" "}
                  - {`${property.state} State`}
                </li>
              </Link>
            ))
          )}
        </ul>
      </div>

      {/* User Activity */}
      <div className="bg-white p-4 rounded shadow space-y-5">
        <h2 className="text-xl font-bold text-blue-700">My Activity</h2>
        <p className="text-sm text-gray-700">🔍 Property Views: 120</p>
        <p className="text-sm text-gray-700">📈 Clicks: 35</p>
      </div>

      {/* 9. Support / Help */}
      <div className="bg-white p-4 rounded shadow space-y-5">
        <h2 className="text-xl font-bold text-blue-700">Support</h2>
        <p className="text-sm text-gray-700">
          Need help? Contact us at support@foland-realty.com
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
          Contact Support
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-xl font-bold text-blue-700">Settings</h2>
        <div className="space-y-2">
          <button className="w-full bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-left">
            Change Password
          </button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-left">
            Notification Preferences
          </button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-left">
            Manage Devices
          </button>
          <button className="w-full bg-red-100 hover:bg-red-200 px-4 py-2 rounded text-left text-red-600">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
