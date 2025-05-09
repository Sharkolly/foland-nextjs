import { Navigate } from "react-router-dom";
import { useContextStore } from "../Store/Context";

type ChildrenProp = {
  children: React.ReactNode;
};

const NoAuth = ({ children }: ChildrenProp) => {
  const { isLoggedIn, token } = useContextStore();
  return isLoggedIn && token ? <Navigate to="/" /> : <>{children}</>;
};

export default NoAuth;
