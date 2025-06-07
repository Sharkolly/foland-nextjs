'use client'
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBookmark } from "react-icons/fa";
import { PiHouseLineFill } from "react-icons/pi";
import Link from "next/link";
import { FaRocketchat } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const PhoneTabs = () => {
  const pathName = usePathname();
  return (
    <div className="hidden max-md:block">
      <div className="fixed bg-white z-[50] text-navy-blue bottom-0 left-0 right-0 border-t-2 py-6 ">
        <div className=" flex justify-evenly items-center  ">
          <Link
            className={
              `${pathName === "/"
                ? "opacity-[1] font-bold scale-[1.1] max-[400px]:scale-[.9] flex-col flex gap-2 items-center"
                  : "opacity-[.8] flex-col scale-[1.1] max-[400px]:scale-[.9]  flex gap-2 items-center"}` 
            }
            href="/"
          >
            <div>
              <FaHome />
            </div>
            <p className="">Home</p>
          </Link>
          <Link
            className={
              `${pathName === "/"
                ? "opacity-[1] flex-col scale-[1.1] max-[400px]:scale-[.9] font-bold flex gap-2 items-center"
                  : "opacity-[.8] flex-col scale-[1.1] max-[400px]:scale-[.9] flex gap-2 items-center"}` 
            }
            href="/properties"
          >
            <div>
              <PiHouseLineFill />
            </div>
            <p className="">Properties</p>
          </Link>
          <Link
            className={
              `${pathName === "/"
                ? "opacity-[1] flex-col scale-[1.1] max-[400px]:scale-[.9] font-bold flex gap-2 items-center"
                  : "opacity-[.8] flex-col scale-[1.1] max-[400px]:scale-[.9] flex gap-2 items-center"}` 
            }
            href="/saved-properties"
          >
  
            <div>
              <FaBookmark />
            </div>
            <p>Saved</p>
          </Link>
          <Link
            className={
              `${pathName === "/"
                ? "opacity-[1] flex-col   scale-[1.1] max-[400px]:scale-[.9] font-bold flex gap-2 items-center"
                  : "opacity-[.8] flex-col scale-[1.1] max-[400px]:scale-[.9] flex gap-2 items-center"}` 
            }
            href="chats"
          >
            <div>
              <FaRocketchat />
              
            </div>
            <p>Chats</p>
          </Link>
          <Link
            className={
              `${pathName === "/"
                ? "opacity-[1] flex-col scale-[1.1] max-[400px]:scale-[.9] font-bold flex gap-2 items-center"
                  : "opacity-[.8] flex-col scale-[1.1] max-[400px]:scale-[.9] flex gap-2 items-center"}` 
            }
            href="/profile"
          >
            <div>
              <CgProfile />
            </div>
            <p>Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneTabs;
