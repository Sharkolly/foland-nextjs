"use client";
import { useContextStore } from "@/Components/Store/Context";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
// import { FaHome } from "react-icons/fa";
// import { IoIosAddCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaBookmark } from "react-icons/fa";
// import { PiHouseLineFill } from "react-icons/pi";
import { MdOutlineLogout } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import Button from "@/Components//Props/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollProgressBar from "../ProgressBar";

const Nav = () => {
  const pathName = usePathname();
  const { menu, setMenu, profileMenu, setProfileMenu, user } =
    useContextStore();

  const changeMenu = () => setMenu(!menu);
  const changeProfileMenu = () => setProfileMenu(!profileMenu);

  const desktopAndMobileLinks = [
    { linkName: "Home", pathName: "/", showDefault: true },
    { linkName: "About", pathName: "/about", showDefault: true },
    { linkName: "Properties", pathName: "/properties", showDefault: true },
    { linkName: "Contact", pathName: "/contact", showDefault: true },
  ];
  const mobileLinks = [
    { linkName: "Add Property", pathName: "/add-property", showDefault: false },
    { linkName: "Settings", pathName: "/settings", showDefault: false },
    { linkName: "Logout", pathName: "/logout", showDefault: false },
  ];

  const authLinks = [
    { linkName: "Login", pathName: "/login" },
    { linkName: "Sign Up", pathName: "/signup" },
  ];

  const topRightLinks = [
    {
      linkName: "My Saved Properties",
      pathName: "/saved-properties",
      icon: <FaBookmark />,
    },
    { linkName: "My Profile", pathName: "/profile", icon: <CgProfile /> },
    { linkName: "Settings", pathName: "/settings", icon: <IoMdSettings /> },
    { linkName: "Logout", pathName: "/logout", icon: <MdOutlineLogout /> },
  ];

  return (
    <header className="flex justify-between items-center border-b-2 border-navy-blue w-full  bg-white  shadow-5xl fixed top-0 left-0 right-0 h-[85px] z-[50]">
      <ScrollProgressBar/>  
      <div className="w-[96%] mx-auto flex justify-between items-center max-md:w-[95%] ">
        <div className="w-[10%] max-md:w-[25%]">
          <Link href="/">
            <Image
              src="/images/1-removebg-preview.png"
              width={100}
              height={50}
              className="w-auto h-auto"
              alt="Logo"
            />
          </Link>
        </div>
        <div
          className={` hidden ${menu ? `max-md:hidden` : `max-md:block`} `}
          onClick={changeMenu}
        >
          <RxHamburgerMenu
            onClick={changeMenu}
            className="text-navy-blue  text-3xl mr-3"
          />
        </div>
        <nav className={`${menu ? `max-md:block` : `max-md:hidden`} `}>
          {/* {menu && ( */}
          <ul className="z-[99] flex justify-center gap-10 max-md:flex-col max-lg:gap-6 max-md:fixed max-md:top-0 max-md:z-[99] max-md:w-[60%] max-md:right-0 max-md:pl-8 max-md:pt-6 max-md:gap-7 max-md:text-white max-md:bg-navy-blue  max-md:backdrop-blur-md max-md:h-[100vh] max-md:overflow-y-auto max-md:justify-start">
            <div className="hidden max-md:block max-md:pr-8  justify-items-end">
              <LiaTimesSolid className="text-3xl " onClick={changeMenu} />
            </div>

            {desktopAndMobileLinks.map((link, index) => (
              <li key={index} className="w-full text-navy-blue pl-5 max-lg:pl-0 max-md:text-white max-md:pl-5">
                <Link
                  className={
                    pathName === link.pathName
                      ? "font-bold"
                      : "w-full font-semibold max-md:font-normal "
                  }
                  href={link.pathName}
                >
                  {link.linkName}
                </Link>
              </li>
            ))}
            {mobileLinks.map((link, index) => (
              <li key={index} className="hidden max-md:block w-full  pl-5 ">
                <Link
                  className={pathName === link.pathName ? "font-semibold" : ""}
                  href={link.pathName}
                >
                  {(link.linkName === "Add Property" &&
                    user?.userProfile?.role === "Landlord") ||
                  user?.userProfile?.role === "Agent"
                    ? link.linkName
                    : ""}
                </Link>
              </li>
            ))}
            {user ? (
              <li className="hidden max-md:block w-full  pl-5 ">
                <Link href="/logout" className="">
                  Logout
                </Link>
              </li>
            ) : (
              <>
                {authLinks.map((link, index) => (
                  <li key={index} className="hidden max-md:block w-full  pl-5 ">
                    <Link
                      className={
                        pathName === link.pathName ? "font-semibold" : ""
                      }
                      href={link.pathName}
                    >
                      {link.linkName}
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </nav>
        {/* )} */}
        {/* </div> */}
        <div className="flex gap-4 max-md:hidden">
          {user && user?.userProfile?.firstName ? (
            <div className="relative ">
              <button
                title={`${user?.userProfile?.firstName} ${user?.userProfile?.lastName}`}
                onClick={changeProfileMenu}
                className="cursor-pointer w-13 h-13 rounded-full bg-navy-blue text-white flex justify-center items-center font-bold"
              >
                {user?.userProfile?.firstName[0]}
                {user?.userProfile?.lastName[0]}
              </button>

              {profileMenu  && (
                <div>
                  <ul className="absolute flex flex-col w-[650%] bg-white border-b-2 border-l-2 top-[70px] border-slate-300 z-[10] left-[0%] translate-x-[-50%] gap-7 py-6 px-8 ">
                    {topRightLinks.map((link, index) => (
                      <li
                        key={index}
                        className=" max-md:hidden w-full "
                      >
                        <Link
                          className={
                            pathName === link.pathName
                              ? "font-semibold flex gap-3 items-center opacity-[1]"
                              : " flex gap-3 items-center opacity-[.8]"
                          }
                          href={link.pathName}
                        >
                          <div>
                            {link.icon}
                          </div>
                          <p>{link.linkName}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <button className="border-bg-navy-blue border-2 text-navy-blue px-5 py-2 max-md:py-4 rounded-md">
                <Link className='font-semibold' href="/login">Login</Link>
              </button>

              <Button>
                <Link className='font-semibold' href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
