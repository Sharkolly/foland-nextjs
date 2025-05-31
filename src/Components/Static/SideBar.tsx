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
import { useContextStore } from "@/Components/Store/Context";
import { usePathname } from "next/navigation";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";

const SideBar = () => {
  const { user, theme } = useContextStore();
  const pathName = usePathname();
  const [openSideBar, setOpenSideBar] = useState(false);
  const openMenu = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
      <div className="relative z-[99]">
        <div
          className={`bg-blue-100/10 rounded-sm p-3 z-[80] fixed top-[50%] translate-y-[-50%] ${
            openSideBar ? "left-[18%]" : "left-[80px] max-md:hidden"
          }`}
          onClick={openMenu}
        >
          {openSideBar ? <FaChevronLeft /> : <FaChevronRight />}
        </div>
        <div className="relative overflow-y-auto z-[17]">
          <div
            className={`${theme ? "bg-navy-blue" : "bg-[#f9f9f9]"} ${
              openSideBar ? "w-[18%]" : "w-[5%]"
            } fixed shadow-xl left-[0%] top-[85px]  overflow-x-hidden max-md:hidden max-xl:w-[28%] max-xl:pl-0 max-lg:w-[35%] h-screen`}
          >
            <div className="flex flex-col overflow-y-auto rounded-br-lg rounded-tr-lg py-6 max-xl:py-5 pl-2 max-xl:pl-10  max-2xl:pl-12 max-lg:pl-6 overflow-x-hidden relative">
              <nav className="h-[85vh] overflow-y-auto overflow-x-hidden relative whitespace-nowrap flex flex-col justify-between font-semibold">
                <ul
                  className={`flex gap-4 flex-col  ${
                    theme ? "text-white" : "text-navy-blue"
                  }`}
                >
                  <li>
                    <Link
                      className={`
                          ${pathName === "/"
                            ?  "font-semibold  opacity-[1] bg-navy-blue text-white"
                            : "opacity-[.8] hover:bg-gray-300"}  flex gap-5 rounded-lg items-center  pl-5 py-3 hover:bg-gray-300 ${
                              openSideBar ? "mr-10" : "mr-3"
                            }
                        `}
                      href="/dashboard"
                    >
                      <div>
                        <FaHome />
                      </div>
                      <p className={`${openSideBar ? "block" : "hidden"}`}>
                      My Dashboard
                      </p>
                    </Link>
                  </li>

             
                  {user?.userProfile?.role === "Landlord" ||
                  user?.userProfile?.role === "Agent" ? (
                      <>
                    <li className="">
                      
                      <Link
                        className={`
                          ${pathName === "/add-property"
                                ? " font-semibold  opacity-[1] bg-navy-blue text-white"
                            : "opacity-[.8] hover:bg-gray-300"}  flex gap-5 rounded-lg items-center  pl-5 py-3 hover:bg-gray-300 ${
                              openSideBar ? "mr-10" : "mr-3"
                            }
                          `}
                        href="/add-property"
                      >
                        <div>
                          <IoIosAddCircleOutline />
                        </div>
                        <p className={`${openSideBar ? "block" : "hidden"}`}>
                          Add Property
                        </p>
                      </Link>
                    </li>
                    <li className="">
                    <Link
                      className={`
                            ${pathName === "/properties"
                              ? " font-semibold  bg-navy-blue text-white  opacity-[1]"
                              : "opacity-[.8] hover:bg-gray-300" } flex gap-5 rounded-lg items-center  pl-5 py-3 hover:bg-gray-300 ${
                                openSideBar ? "mr-10" : "mr-3"
                              }
                          `}
                      href="/my-listing"
                    >
                      <div>
                        <PiHouseLineFill />
                      </div>
                      <p className={`${openSideBar ? "block" : "hidden"}`}>
                        My Listing
                      </p>
                    </Link>
                  </li>
                    </>
                  ) : (
                    ""
                  )}
                  
                  <li className="">
                    <Link
                      className={`
                            ${pathName === "/properties"
                              ? " font-semibold  bg-navy-blue text-white  opacity-[1]"
                              : "opacity-[.8] hover:bg-gray-300" } flex gap-5 rounded-lg items-center  pl-5 py-3 hover:bg-gray-300 ${
                                openSideBar ? "mr-10" : "mr-3"
                              }
                          `}
                      href="/properties"
                    >
                      <div>
                        <PiHouseLineFill />
                      </div>
                      <p className={`${openSideBar ? "block" : "hidden"}`}>
                        Properties
                      </p>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className={`
                        ${pathName === "/saved-properties"
                              ?  "font-semibold  opacity-[1] bg-navy-blue text-white"
                          : "opacity-[.8] hover:bg-gray-300"}  flex gap-5 items-center  rounded-lg pl-5 py-3 hover:bg-gray-300 ${
                            openSideBar ? "mr-10" : "mr-3"
                          }
                        `}
                      href="/saved-properties"
                    >
                      <div>
                        <FaBookmark />
                      </div>
                      <p className={`${openSideBar ? "block" : "hidden"}`}>
                        Saved Properties
                      </p>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className={`
                          ${pathName === "/profile"
                             ? "fon t-semibold  opacity-[1] bg-navy-blue text-white"
                            : "opacity-[.8] hover:bg-gray-300"}  flex gap-5 rounded-lg items-center  pl-5 py-3 hover:bg-gray-300 ${
                              openSideBar ? "mr-10" : "mr-3"
                            }
                        `}
                      href="/profile"
                    >
                      <div>
                        <CgProfile />
                      </div>
                      <p className={`${openSideBar ? "block" : "hidden"}`}>
                        Profile
                      </p>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className={`
                          ${pathName === "/chats"
                                ? " font-semibold  opacity-[1] bg-navy-blue text-white"
                            : "opacity-[.8] hover:bg-gray-300"}  flex gap-5 rounded-lg items-center  pl-5 py-3 hover:bg-gray-300 ${
                              openSideBar ? "mr-10" : "mr-3"
                            }
                        `}
                      href="/chats"
                    >
                      <div>
                        <FaRocketchat />
                      </div>
                      <p className={`${openSideBar ? "block" : "hidden"}`}>
                        Chats
                      </p>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className={`
                          ${pathName === "/search-properties"
                                ? " font-semibold  opacity-[1] bg-navy-blue text-white"
                            : "opacity-[.8] hover:bg-gray-300"}  flex gap-5 rounded-lg items-center  pl-5 py-3 hover:bg-gray-300 ${
                              openSideBar ? "mr-10" : "mr-3"
                            }
                       `}
                      href="/search-properties"
                    >
                      <div>
                        <BsSearch />
                      </div>
                      <p className={`${openSideBar ? "block" : "hidden"}`}>
                        Search Properties
                      </p>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className={`
                          ${pathName === "/settings"
                                ? " font-semibold  opacity-[1] bg-navy-blue text-white"
                            : "opacity-[.8] hover:bg-gray-300"} flex gap-5 items-center  rounded-lg pl-5 py-3 hover:bg-gray-300 ${
                              openSideBar ? "mr-10" : "mr-3"
                            }
                        `}
                      href="/settings"
                    >
                      <div>
                        <IoMdSettings />
                      </div>
                      <p className={`${openSideBar ? "block" : "hidden"}`}>
                        Settings
                      </p>
                    </Link>
                  </li>
                </ul>
          <div className="w-[87%] text-red-600 rounded-lg mr-10 pl-5 py-3 hover:bg-gray-300">
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
