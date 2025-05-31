import { ContactDetails } from "@/Types/contact-info.types";
import API from "./Api";

export const postContactMessage = async (contactDetails: ContactDetails) => {
  const response = await API.post(
    "/contact/message",
    contactDetails
  );
  const data = response.data; // Safe, only runs if request succeeded
  return { message: data.message, success: true };
};
export const postProperty = async (formData: FormData) => {
  const response = await API.post(
    "/property/add-property",
    formData
  );
  const data = response.data; // Safe, only runs if request succeeded
  return { message: data.message, success: true };
};

export const postSavedProperty = async (propertyId: string) => {
  console.log(propertyId)
  const { data } = await API.post(`/property/save-property`,  {
    propertyId,
  }
  );
  return data;
};
export const postForSavedProperty = async (propertyId: string) => {
  console.log(propertyId)
  const { data } = await API.post("/property/save-property", {
    propertyId,
  });
  return data;
};
