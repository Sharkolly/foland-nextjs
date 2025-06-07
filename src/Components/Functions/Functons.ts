import axios, { AxiosError } from "axios";

export const logOut = async () => {    
  try {
    const response = await axios.get(
      "http://localhost:3001/api/foland-realty/auth/logout", {withCredentials: true}
    );
    if (response.status === 200) {
      console.log("Logout successful");
      return response.data;

    }
  } catch (error) {
    const errorMessage = error as AxiosError<{ message?: string }>;
    const errorResponse =
      errorMessage.response?.data?.message || "An unexpected error occurred.";
    return { message: "Logout failed", error: errorResponse };
  }
};
