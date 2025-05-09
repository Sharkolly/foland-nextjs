import Logo from "../Images/1-removebg-preview.png";
import { NavLink, Link } from "react-router-dom";
import { useContextStore } from "../Store/Context";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
// import { FaHome } from "react-icons/fa";
// import { IoIosAddCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaBookmark } from "react-icons/fa";
// import { PiHouseLineFill } from "react-icons/pi";
import { MdOutlineLogout } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import Button from "../Props/Button";

const Nav = () => {
  const { token, isLoggedIn } = useContextStore();

  const { menu, setMenu, profileMenu, setProfileMenu, user } =
    useContextStore();

  const changeMenu = () => setMenu(!menu);
  const changeProfileMenu = () => setProfileMenu(!profileMenu);

  const logOut = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", "false");
    location.reload();
  };


  return (
    <header className="flex justify-between items-center border-b-2 border-navy-blue w-full  bg-white  shadow-5xl fixed top-0 left-0 right-0 h-[85px] z-[50]">
      <div className="w-[92%] mx-auto flex justify-between items-center max-md:w-[95%] ">
        <div className="w-[10%] max-md:w-[25%]">
          <Link to="/">
            <img src={Logo} alt="Logo" />
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
          <ul className="z-[99] flex justify-center gap-10 max-md:flex-col max-lg:gap-6 max-md:fixed max-md:top-0 max-md:z-[99] max-md:w-[60%] max-md:right-0 max-md:pl-8 max-md:pt-6 max-md:gap-11 max-md:text-white max-md:bg-navy-blue  max-md:backdrop-blur-md max-md:h-[100vh] max-md:overflow-y-auto max-md:justify-start">
            <div className="hidden max-md:block max-md:pr-8  justify-items-end">
              <LiaTimesSolid className="text-3xl " onClick={changeMenu} />
            </div>
            <li className="w-[90%]  pl-5  ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-semibold w-ful" : "w-full "
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="w-full  pl-5 ">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="w-full  pl-5 ">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/services"
              >
                Services
              </NavLink>
            </li>
            {user?.userProfile?.role === "Landlord" ||
            user?.userProfile?.role === "Agent" ? (
              <li className="hidden max-md:block w-full  pl-5 ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/add-property"
                >
                  Add Property
                </NavLink>
              </li>
            ) : (
              ""
            )}
            <li className="w-full  pl-5 ">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/properties"
              >
                Properties
              </NavLink>
            </li>

            {/* <li className="hidden max-md:block w-full  pl-5 ">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/saved-properties"
              >
                Saved Properties
              </NavLink>
            </li> */}
            {/* <li className="hidden max-md:block w-full  pl-5 ">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
            <li className="hidden max-md:block w-full  pl-5 ">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/Chats"
              >
                Chats
              </NavLink>
            </li> */}
            {/* <li className="hidden max-md:block w-full  pl-5 ">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/profile"
              >
                Search Properties
              </NavLink>
            </li> */}
            <li className="hidden max-md:block w-full  pl-5 ">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/settings"
              >
                Settings
              </NavLink>
            </li>
            {isLoggedIn && token ? (
              <li className="hidden max-md:block w-full  pl-5 ">
                <button className="" onClick={logOut}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="hidden max-md:block w-full  pl-5 ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "font-semibold" : ""
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="hidden max-md:block w-full  pl-5 ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "font-semibold" : ""
                    }
                    to="/signup"
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
        {/* )} */}
        {/* </div> */}
        <div className="flex gap-4 max-md:hidden">
          {user && token ? (
            <div className="relative ">
              <button
                title={`${user?.userProfile?.firstName} ${user?.userProfile?.lastName}`}
                onClick={changeProfileMenu}
                className="cursor-pointer w-13 h-13 rounded-full bg-navy-blue text-white flex justify-center items-center font-bold"
              >
                {user?.userProfile?.firstName[0]}
                {user?.userProfile?.lastName[0]}
              </button>

              {profileMenu && (
                <div>
                  <ul className="absolute flex flex-col w-[650%] bg-white border-b-2 border-l-2 top-[70px] border-slate-300 z-[10] left- left-[0%] translate-x-[-50%] gap-7 py-6 px-8 ">
                    <li className="">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "font-semibold flex gap-3 items-center opacity-[1]"
                            : " flex gap-3 items-center opacity-[.8]"
                        }
                        to="/saved-properties"
                      >
                        <div>
                          <FaBookmark />
                        </div>
                        <p>My Saved Properties</p>
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "font-semibold flex gap-3 items-center opacity-[1]"
                            : " flex gap-3 items-center opacity-[.8]"
                        }
                        to="/profile"
                      >
                        <div>
                          <CgProfile />
                        </div>
                        <p>My Profile</p>
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "font-semibold flex gap-3 items-center opacity-[1]"
                            : " flex gap-3 items-center opacity-[.8]"
                        }
                        to="/settings"
                      >
                        <div>
                          <IoMdSettings />
                        </div>
                        <p>Settings</p>
                      </NavLink>
                    </li>
                    <li className="cursor-pointer">
                      <button
                        onClick={logOut}
                        className="flex cursor-pointer gap-3 items-center rounded-md"
                      >
                        <div>
                          <MdOutlineLogout />
                        </div>
                        <p>Logout</p>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <button className="border-2 border-navy-blue text-nav-blue px-5 py-2 rounded-md">
                <Link to="/login">Login</Link>
              </button>
              
              <Button>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
