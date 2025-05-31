import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUser, getRequest } from "../API/Get.axios";
import {
  postForSavedProperty,
  postProperty,
  postSavedProperty,
  postContactMessage,
} from "../API/Post.axios";
import { ContactDetails } from "@/Types/contact-info.types";

// get the User
export const useQueryUserFunction = (queryKey: string, url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [queryKey, url],
    queryFn: getUser,
    // retry: 5,
  });
  return { data, error, isLoading };
};

//get all properties
export const useQueryPropertyFunction = (url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["properties", url],
    queryFn: getRequest,
  });
  return { data, error, isLoading };
};

//get user profile and details
export const useQueryProfileFunction = (url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["Profile", url],
    queryFn: getRequest,
  });
  return { data, error, isLoading };
};

//get all saved properties
export const useQuerySavedPropertyFunction = (url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["Saved-Properties", url],
    queryFn: getRequest,
    staleTime: 0,
  });
  return { data, error, isLoading };
};

//get user saved properties
export const useQueryUserSavedPropertyFunction = (url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["User-Saved-Properties", url],
    queryFn: getRequest,
    staleTime: 0,
  });
  return { data, error, isLoading };
};

//get a single property
export const useQuerySinglePropertyFunction = (url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["single-property", url],
    queryFn: getRequest,
    staleTime: 0,
  });
  return { data, error, isLoading };
};

//get properties added by user
export const useQueryUserPropertiesAddedFunction = (url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user-properties-added", url],
    queryFn: getRequest,
    staleTime: 0,
  });
  return { data, error, isLoading };
};
//get all chats engaged in
export const useQueryChatUsers = (url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["chat-users", url],
    queryFn: getRequest,
    staleTime: 0,
  });
  return { data, error, isLoading };
};

//get single chat of a user
export const useQueryChatUser = (url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["chat", url],
    queryFn: getRequest,
    staleTime: 0,
  });
  return { data, error, isLoading };
};

//get request for admin
export const useQueryAdmin = (url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["Admin", url],
    queryFn: getRequest,
    staleTime: 0,
  });
  return { data, error, isLoading };
};

//send a message on the contact form
export const useMutationContactMessageFunction = (queryKey: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (contactDetails: ContactDetails) => postContactMessage(contactDetails),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
};
//post property
export const useMutationPropertyFunction = (queryKey: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => postProperty(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
};

//post request for saving property in the saved property page

export const useMutationSavePropertyFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (propertyId: string) => postSavedProperty(propertyId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["User-Saved-Properties"] });
      queryClient.invalidateQueries({ queryKey: ["Saved-Properties"] });
      queryClient.invalidateQueries({ queryKey: ["user-properties-added"] });
      queryClient.invalidateQueries({ queryKey: ["Profile"] });
      queryClient.invalidateQueries({ queryKey: ["Admin"] });
    },
  });
};

//post request for saving property in the all property page
export const useMutationSaveForPropertyFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (propertyId: string) => postForSavedProperty(propertyId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["User-Saved-Properties"] });
      queryClient.invalidateQueries({ queryKey: ["Saved-Properties"] });
      queryClient.invalidateQueries({ queryKey: ["Profile"] });
      queryClient.invalidateQueries({ queryKey: ["Admin"] });
    },
  });
};
