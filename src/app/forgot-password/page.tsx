"use client";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import Button from "@/Components/Props/AuthButton";
import Image from "next/image";
import LayoutAuth from "@/Components/Auth/LayoutAuth";

const Reset_Password = () => {
  const [steps, setSteps] = useState<number>(1);
  const [code, setCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [messageResponse, setMessageResponse] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const changeShowPasswordStatus = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const forgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsFetching(true);
      const { data } = await axios.post(
        "http://localhost:3001/api/foland-realty/auth/forgot-password",
        // "https://foland-realty-server.onrender.com/auth/forgot-password",
        { email }
      );
      setMessageResponse(data.message);
      console.log(messageResponse);
      setTimeout(() => {
        setSteps(2);
      }, 2500);
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An unexpected error occurred.";
      // toast.error(errorMessage);
      setMessageResponse(errorMessage);
    } finally {
      setIsFetching(false);
    }
  };

  const verifyCode = async (e: React.FormEvent<HTMLFormElement>) => {    
    e.preventDefault();

    try {
      setIsFetching(true);
      const { data } = await axios.post(
        // "http://localhost:3001/auth/verify-code",
        "https://foland-realty-server.onrender.com/api/foland-realty/auth/verify-code",

        {
          code,
          email,
        }
      );
      setMessageResponse(data.message);
      setTimeout(() => {
        setSteps(3);
      }, 2500);
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An unexpected error occurred.";
      // toast.error(errorMessage);
      setMessageResponse(errorMessage);
    } finally {
      setIsFetching(false);
    }
  };

  const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsFetching(true);
      const { data } = await axios.post(
        // "http://localhost:3001/auth/reset-password",
        "https://foland-realty-server.onrender.com/api/foland-realty/auth/reset-password",
        {
          newPassword,
          email,
        }
      );
      setMessageResponse(data.message);
      location.replace("/login");
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An unexpected error occurred.";
      setMessageResponse(errorMessage);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (messageResponse) {
      setTimeout(() => {
        setMessageResponse("");
      }, 2500);
    }
  }, [messageResponse]);

  return (
    <LayoutAuth>
      <div className="w-[80%] mx-auto max-md:w-[85%]">
        <div className="flex justify-center">
          <Image width={150} height={100} src="/images/logo.png" className="scale-[.6] h-auto w-auto" alt="Foland Realty" />
        </div>
        {steps === 1 && (
          <div>
            <h1 className=" text-black font-bold text-2xl mb-8">
              <span className="text-navy-blue"> Forgot Password</span>
            </h1>

            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => forgotPassword(e)}
            >
              <div>
                <input
                  className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
                  type="email"
                  placeholder="Enter your email address..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleEmailOnChange(e)
                  }
                />
              </div>

              <div className="text-right text-navy-blue ">
                <Link href="/login">Go back</Link>
              </div>
              <p
                style={
                  messageResponse === "Reset code sent to email"
                    ? { color: "green" }
                    : { color: "red" }
                }
                className="text-center"
              >
                {messageResponse ? messageResponse : ""}{" "}
              </p>
              <div className="flex items-center justify-center w-full">
                <Button>{isFetching ? "Please Wait ..." : "Send Code"}</Button>
              </div>
            </form>
          </div>
        )}
        {steps === 2 && (
          <div>
            <h1 className=" text-black font-bold text-2xl mb-8">
              <span className="text-navy-blue"> Verify Code</span>
            </h1>

            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => verifyCode(e)}
            >
              <div>
                <input
                  className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
                  type="text"
                  placeholder="Enter verification code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <p
                style={
                  messageResponse === "Code Verified"
                    ? { color: "green" }
                    : { color: "red" }
                }
                className="text-center"
              >
                {messageResponse ? messageResponse : ""}{" "}
              </p>

              <div className="flex items-center justify-center w-full">
                <Button>
                  {isFetching ? "Please Wait ..." : "Verify Code"}
                </Button>
              </div>
            </form>
          </div>
        )}

        {steps === 3 && (
          <div>
            <h1 className=" text-black font-bold text-2xl mb-8">
              <span className="text-navy-blue"> Reset Password</span>
            </h1>
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => resetPassword(e)}
            >
              <div className="relative">
                <input
                  // className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
                  className="w-full h-[2.5em] outline-none text-navy-blue pl-3 border border-gray-400 rounded-md"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                {showPassword ? (
                  <IoEyeOffSharp
                    onClick={changeShowPasswordStatus}
                    className="absolute top-[50%] translate-y-[-50%] text-xl  text-navy-blue right-[20px] z-[10] max-md:right-[15px]"
                  />
                ) : (
                  <MdRemoveRedEye
                    onClick={changeShowPasswordStatus}
                    className="absolute top-[50%] translate-y-[-50%] text-xl  text-navy-blue right-[20px] z-[10] max-md:right-[15px] "
                  />
                )}
              </div>
              <p
                style={
                  messageResponse === "Password Reset"
                    ? { color: "green" }
                    : { color: "red" }
                }
                className="text-center"
              >
                {messageResponse ? messageResponse : ""}{" "}
              </p>

              <div className="flex items-center justify-center w-full">
                <Button>
                  {isFetching ? "Please Wait ..." : "Reset Password"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </LayoutAuth>
  );
};

export default Reset_Password;
