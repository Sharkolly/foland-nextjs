import { useEffect } from "react";
import Layout from "../Auth/LayoutAuth";
import Login from "../Auth/Login";
import { useContextStore } from "../Store/Context";
import { useLocation } from "react-router-dom";

type childProp = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: childProp) => {
  const location = useLocation();

  const { isLoggedIn, token, setMenu } = useContextStore();

  useEffect(() => {
    setMenu(false);
  }, [location.pathname]);
  return isLoggedIn && token ? (
    <> {children} </>
  ) : (
    <Layout>
      <Login />
    </Layout>
  );
};

export default ProtectedRoute;
