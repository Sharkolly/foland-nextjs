import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { useContextStore } from "../Store/Context";

const LayoutPages = () => {
  const { setMenu, setProfileMenu } = useContextStore();

  const changeMenu = () => {
    setMenu(false);
    setProfileMenu(false);
  };
  return (
    <div>
      <Nav />
      <div className="mt-[80px] " onClick={changeMenu}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPages;
