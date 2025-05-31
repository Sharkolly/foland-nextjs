
import { useRouter } from "next/navigation";
import { useContextStore } from "../Store/Context";


type ChildrenProp = {
  children: React.ReactNode;
};

const NoAuth = ({ children }: ChildrenProp) => {
  const router = useRouter();
  const { isLoggedIn, token } = useContextStore();
  return isLoggedIn && token ? router.push('/') : <>{children}</>;
};

export default NoAuth;
