'use client'
import API from "@/Components/API/Api";
import { AxiosError } from "axios";
import { createContext, useState, useContext, useEffect } from "react";
// import { useQueryUserFunction } from "@/Components/Hooks/useQuery";
import { UserDetailsType, UserDetailsObjectType } from "@/Types/user.types";
import Cookies from 'js-cookie';
// import {useRouter} from 'next/navigation'

export const UserDetails = createContext<UserDetailsType | undefined>(
  undefined
);

const Context = ({children}: {children: React.ReactNode}) => {
  // const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  // const [subscribed, setSubscribed] = useState(
  //   localStorage.getItem("isSubscribed")
  // );
  const token = Cookies.get('token');
  const [showModal, setShowModal] = useState(false);
  const [menu, setMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [user, setUser] = useState<UserDetailsObjectType | null>(null);
  const [theme, setTheme] = useState<boolean>(false);

  const getUser = async () => {
    try {
      const getUserDetails = await API.get("/user",{withCredentials: true} );
      const userProfileDetailsWithTotalProperty = await getUserDetails.data;
      console.log(getUserDetails);
      setUser(userProfileDetailsWithTotalProperty);
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An unexpected error occurred.";
        console.log(errorMessage);
// router.push('/Login')
    }
  };


  // const { data, error, isLoading } = useQueryUserFunction(
  // 'user',
  //   "/foland-realty/user"
  // );

  // useEffect(() => {
  //   if (token && data) {
  //     setUser(data);
  //   }
  // }, [token, data]);

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  return (
    <UserDetails.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        profilePic,
        setProfilePic,
        // subscribed,
        // setSubscribed,
        showModal,
        setShowModal,
        menu,
        setMenu,
        profileMenu,
        setProfileMenu,
        user,
        setUser,
        theme,
        setTheme,
      }}
    >
      {children}
    </UserDetails.Provider>
  );
};

export default Context;

export const useContextStore = () => {
  const context = useContext(UserDetails);
  if (!context) throw new Error("useStore must be used within a Store");
  return context;
};
