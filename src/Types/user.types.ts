import { propertiesType } from "./property.types";
type userTotalPropertyType = number;
export type UserSavedPropertiesType = {
  owner: string;
  property: propertiesType;
  saved: string;
};

export type UserDetailsObjectType = {
  userProfile: userType;
  userTotalProperty: userTotalPropertyType;
  userSavedTotalProperty: userTotalPropertyType;
  userSavedProperty: UserSavedPropertiesType[];
};

export type UserDetailsType = {
  // isLoggedIn: string | null;
  // setIsLoggedIn: React.Dispatch<React.SetStateAction<string | null>>;
  // token: string | null;
  // setToken: React.Dispatch<React.SetStateAction<string | null>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  profilePic: File | null;
  setProfilePic: React.Dispatch<React.SetStateAction<File | null>>;
  // subscribed: string | null;
  // setSubscribed: React.Dispatch<React.SetStateAction<string | null>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  profileMenu: boolean;
  setProfileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  user: null | UserDetailsObjectType;
  setUser: React.Dispatch<React.SetStateAction<null | UserDetailsObjectType>>;
};

export type userType = {
  email: string;
  lastName: string;
  firstName: string;
  uuid: string;
  _id: string;
  role: "Tenant" | "Landlord" | "Agent";
  createdAt: string;
  updatedAt: string;
  totalProperty: number;
  phoneNumber: string;
  profilePicture: string;
};

export type userInfo = {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
};

export type usersType = {
  _id: string;
  roomId: string;
  receiver: userInfo;
  sender: userInfo;
};

