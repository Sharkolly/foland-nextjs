"use client";
import { FaHome } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaBookmark } from "react-icons/fa";
import { PiHouseLineFill } from "react-icons/pi";
import { MdOutlineLogout } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa6";
import Link from "next/link";
import { IoMdSettings } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { useContextStore } from "../Store/Context";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { logOut } from "@/Components/Functions/Functons";

const SideBar = () => {
  const { user, theme } = useContextStore();
  const pathName = usePathname();
  const [openSideBar, setOpenSideBar] = useState(false);
  const openMenu = () => {
    setOpenSideBar(!openSideBar);
  };
  const sidebarLinks = [
    {
      name: "My Dashboard",
      icon: <FaHome />,
      link: "/dashboard",
      others: false,
    },
    {
      name: "Add Property",
      icon: <IoIosAddCircleOutline />,
      link: "/add-property",
      others: true,
    },
    {
      name: "My Listing",
      icon: <PiHouseLineFill />,
      link: "/my-listing",
      others: true,
    },
    {
      name: "Properties",
      icon: <PiHouseLineFill />,
      link: "/properties",
      others: false,
    },
    {
      name: "Saved Properties",
      icon: <FaBookmark />,
      link: "/saved-properties",
      others: false,
    },
    { name: "Profile", icon: <CgProfile />, link: "/profile", others: false },
    { name: "Chats", icon: <FaRocketchat />, link: "/chats", others: false },
    {
      name: "Search Properties",
      icon: <BsSearch />,
      link: "/search-properties",
      others: false,
    },
    {
      name: "Settings",
      icon: <IoMdSettings />,
      link: "/settings",
      others: false,
    },
  ];

  const router = useRouter();
  const handleLogout = async () => {
    const response = await logOut();
    if (response && response.message === "Logout successful") {
      // Handle successful logout, e.g., redirect to login page
      router.push("/login");
    } else {
      // Handle logout failure
      alert("Logout failed");
    }
  };
  return (
    <div className="relative z-[99] ">
      <div
        className={`bg-blue-100/90 rounded-sm p-3 z-[80] fixed top-[85px] translate-y-[-0%] ${
          openSideBar ? "left-[239px]" : "left-[110px]"
        } max-md:hidden `}
        onClick={openMenu}
      >
        {openSideBar ? <FaChevronLeft /> : <FaChevronRight />}
      </div>
      <div className="relative overflow-y-auto z-[17] bg-red-800">
        <div
          className={`${theme ? "bg-navy-blue" : "bg-[#f9f9f9]"} ${
            openSideBar ? "px-7" : "px-4"
          } fixed shadow-xl left-[0%] top-[85px]  overflow-x-hidden max-md:hidden    h-screen`}
        >
          <div className="flex flex-col overflow-y-auto rounded-br-lg rounded-tr-lg py-6 max-xl:py-5 overflow-x-hidden relative">
            <nav className="h-[85vh] overflow-y-auto overflow-x-hidden relative whitespace-nowrap flex flex-col justify-between font-semibold">
              <ul
                className={`flex gap-4 flex-col w-full ${
                  openSideBar ? "items-start" : "items-center"
                }`}
              >
                {sidebarLinks
                  .filter((link) => {
                    if (link.others) {
                      return (
                        user?.userProfile?.role === "Landlord" ||
                        user?.userProfile?.role === "Agent"
                      );
                    }
                    return true;
                  })
                  .map(({ link, icon, name }, index) => (
                    <li
                      key={index}
                      className={`
        ${
          pathName === link
            ? "font-semibold opacity-[1] bg-navy-blue text-white"
            : "opacity-[.8] hover:bg-gray-300"
        }
        flex w-full ${
          openSideBar ? "justify-start" : "justify-center"
        } items-center rounded-lg py-3 hover:bg-gray-300
      `}
                    >
                      <Link
                        className={`${
                          openSideBar ? "flex items-center gap-3 px-5" : ""
                        } text-[.8em]`}
                        href={link}
                      >
                        <div>{icon}</div>
                        <p className={`${openSideBar ? "block" : "hidden"}`}>
                          {name}
                        </p>
                      </Link>
                    </li>
                  ))}
              </ul>
              <div
                onClick={handleLogout}
                className="w-[87%] cursor-pointer text-red-600 text-[.8em] rounded-lg mr-10 px-3 py-3 hover:bg-gray-300"
              >
                <button className="flex gap-5  items-center">
                  <div>
                    <MdOutlineLogout />
                  </div>
                  <p className={`${openSideBar ? "block" : "hidden"}`}>
                    Logout
                  </p>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
