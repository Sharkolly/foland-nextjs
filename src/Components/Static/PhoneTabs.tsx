import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBookmark } from "react-icons/fa";
import { PiHouseLineFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { FaRocketchat } from "react-icons/fa6";

const PhoneTabs = () => {
  return (
    <div className="z">
      <div className="fixed bg-white z-[50] text-navy-blue bottom-0 left-0 right-0 border-t-2 py-6 ">
        <div className=" flex justify-evenly items-center  ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "opacity-[1] font-bold scale-[1.1] max-[400px]:scale-[.9] flex-col flex gap-2 items-center"
                : "opacity-[.8] flex-col scale-[1.1] max-[400px]:scale-[.9]  flex gap-2 items-center"
            }
            to="/"
          >
            <div>
              <FaHome />
            </div>
            <p className="">Home</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "opacity-[1] flex-col scale-[1.1] max-[400px]:scale-[.9] font-bold flex gap-2 items-center"
                : "opacity-[.8] flex-col scale-[1.1] max-[400px]:scale-[.9] flex gap-2 items-center"
            }
            to="/properties"
          >
            <div>
              <PiHouseLineFill />
            </div>
            <p className="">Properties</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "opacity-[1] flex-col scale-[1.1] max-[400px]:scale-[.9] font-bold flex gap-2 items-center"
                : "opacity-[.8] flex-col scale-[1.1] max-[400px]:scale-[.9] flex gap-2 items-center"
            }
            to="/saved-properties"
          >
  
            <div>
              <FaBookmark />
            </div>
            <p>Saved</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "opacity-[1] flex-col   scale-[1.1] max-[400px]:scale-[.9] font-bold flex gap-2 items-center"
                : "opacity-[.8] flex-col scale-[1.1] max-[400px]:scale-[.9] flex gap-2 items-center"
            }
            to="chats"
          >
            <div>
              <FaRocketchat />
              
            </div>
            <p>Chats</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "opacity-[1] flex-col scale-[1.1] max-[400px]:scale-[.9] font-bold flex gap-2 items-center"
                : "opacity-[.8] flex-col scale-[1.1] max-[400px]:scale-[.9] flex gap-2 items-center"
            }
            to="/profile"
          >
            <div>
              <CgProfile />
            </div>
            <p>Profile</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PhoneTabs;
