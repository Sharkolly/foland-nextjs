import { FaHome } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaBookmark } from "react-icons/fa";
import { PiHouseLineFill } from "react-icons/pi";
import { MdOutlineLogout } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { useContextStore } from "../Store/Context";

const SideBar = () => {
  const { user, theme } = useContextStore();

  return (
    <div className="relative overflow-y-auto z-[99]">
      <div
        className={`${
          theme ? "bg-navy-blue" : "bg-blue-100/10"
        } fixed shadow-xl left-[0%] w-[24%] max-md:hidden max-xl:w-[28%] max-xl:pl-0 max-lg:w-[35%] h-screen`}
      >
        <div className="flex flex-col h-full overflow-y-auto rounded-br-lg rounded-tr-lg py-10 max-xl:py-5 pl-20 max-xl:pl-10 max-2xl:pl-12 max-lg:pl-6 ">
          {/* <div  > */}
          <nav className=" h-[550px] overflow-y-auto">
            <ul
              className={`flex gap-4 flex-col ${
                theme ? "text-white" : "text-navy-blue"
              }`}
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1] mr-10 pl-5 py-3"
                      : " flex gap-3 items-center rounded-lg opacity-[.8] mr-10 pl-5 py-3 hover:bg-gray-300"
                  }
                  to="/"
                >
                  <div>
                    <FaHome />
                  </div>
                  <p>Home</p>
                </NavLink>
              </li>

              {user?.userProfile?.role === "Landlord" ||
              user?.userProfile?.role === "Agent" ? (
                <li className="">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold flex gap-3 items-center opacity-[1] mr-10 pl-5 py-3 text-white bg-navy-blue rounded-lg"
                        : " flex gap-3 items-center rounded-lg opacity-[.8] mr-10 pl-5 py-3 hover:bg-gray-300"
                    }
                    to="/add-property"
                  >
                    <div>
                      <IoIosAddCircleOutline />
                    </div>
                    <p>Add Property</p>
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1] mr-10 pl-5 py-3 text-white bg-navy-blue rounded-lg"
                      : " flex gap-3 items-center rounded-lg opacity-[.8] mr-10 pl-5 py-3 hover:bg-gray-300"
                  }
                  to="/properties"
                >
                  <div>
                    <PiHouseLineFill />
                  </div>
                  <p>Properties</p>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1] mr-10 pl-5 py-3 text-white bg-navy-blue rounded-lg"
                      : " flex gap-3 items-center rounded-lg opacity-[.8] mr-10 pl-5 py-3 hover:bg-gray-300"
                  }
                  to="/saved-properties"
                >
                  <div>
                    <FaBookmark />
                  </div>
                  <p>Saved Properties</p>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1] mr-10 pl-5 py-3 text-white bg-navy-blue rounded-lg"
                      : " flex gap-3 items-center rounded-lg opacity-[.8] mr-10 pl-5 py-3 hover:bg-gray-300"
                  }
                  to="/profile"
                >
                  <div>
                    <CgProfile />
                  </div>
                  <p>Profile</p>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1] mr-10 pl-5 py-3 text-white bg-navy-blue rounded-lg"
                      : " flex gap-3 items-center rounded-lg opacity-[.8] mr-10 pl-5 py-3 hover:bg-gray-300"
                  }
                  to="/chats"
                >
                  <div>
                    <FaRocketchat />
                  </div>
                  <p>Chats</p>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1] mr-10 pl-5 py-3 text-white bg-navy-blue rounded-lg"
                      : " flex gap-3 items-center rounded-lg opacity-[.8] mr-10 pl-5 py-3 hover:bg-gray-300"
                  }
                  to="/search-properties"
                >
                  <div>
                    <BsSearch />
                  </div>
                  <p>Search Properties</p>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1] mr-10 pl-5 py-3 text-white bg-navy-blue rounded-lg"
                      : " flex gap-3 items-center rounded-lg opacity-[.8] mr-10 pl-5 py-3 hover:bg-gray-300"
                  }
                  to="/settings"
                >
                  <div>
                    <IoMdSettings />
                  </div>
                  <p>Settings</p>
                </NavLink>
              </li>
              <li className="w-[87%] text-red-600 rounded-lg mr-10 pl-5 py-3 hover:bg-gray-300">
                <button className="flex gap-3  items-center">
                  <div>
                    <MdOutlineLogout />
                  </div>
                  <p>Logout</p>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
