/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import  Link  from "next/link";
import { MdRemoveRedEye } from "react-icons/md";
import { useState, useEffect } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { useContextStore } from "../../Components/Store/Context";
import axios, { AxiosError } from "axios";
import Button from "@/Components/Props/AuthButton";
import Image from "next/image";
import LayoutAuth from "@/Components/Auth/LayoutAuth";
import {useRouter} from 'next/navigation';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { email, setEmail, password, setPassword } = useContextStore();
  const router = useRouter();

  const [formResponse, setFormResponse] = useState("");
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const changeShowPasswordStatus = () => {
    setShowPassword(!showPassword);
  };

  const emailOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { email: email.toLowerCase(), password };

    try {
      setIsFetching(true);
      const { data } = await axios.post(
        "https://foland-realty-server-1.onrender.com/api/foland-realty/auth/login",
        // "http://localhost:3001/api/foland-realty/auth/login",
        formData,    {
          withCredentials: true,
        }
      );
      
      if (data.token) {
        const { data: response } = await axios.get(
          // "http://localhost:3001/api/foland-realty/auth/token-verify",
          "https://foland-realty-server.onrender.com/api/foland-realty/auth/token-verify",
          {
            withCredentials: true,
          }
        );
        setFormResponse(data?.message || "Login Successful");
        router.push("/properties");
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An unexpected error occurred.";
      setFormResponse(errorMessage);
    } finally {
      setTimeout(() => {
        setIsFetching(false);
      }, 2500);
    }
  };

  useEffect(() => {
    //reset form response
    if (formResponse) {
      setTimeout(() => {
        setFormResponse("");
      }, 4000);
    }
  }, [formResponse]);

  return (    
      <LayoutAuth>
        <div className="w-[80%] mx-auto max-md:w-[85%]">
          <div className="flex justify-center">
            <Image width={100} height={70} src="/images/logo.png" className="scale-[.6]h-auto w-auto" alt="Foland Realty Logo" />
          </div>
          <h1 className="text-center text-black font-bold text-2xl mb-8 mt-5">
            Login to<span className="text-semi-navy-blue"> Foland Realty</span>
          </h1>

          <form className="flex flex-col gap-6" onSubmit={(e) => formSubmit(e)}>
            <div>
              <input
                value={email.toLowerCase()}
                onChange={(e) => emailOnchangeInput(e)}
                className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
                type="email"
                placeholder="Enter your email address..."
              />
            </div>

            <div>
              <div className="relative">
                <input
                  className="w-full h-[2.5em] outline-none text-navy-blue pl-3 border border-gray-400 rounded-md"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => passwordOnchangeInput(e)}
                  type={showPassword ? "text" : "password"}
                />
                {showPassword ? (
                  <IoEyeOffSharp
                    onClick={changeShowPasswordStatus}
                    className="absolute top-[50%] translate-y-[-50%] text-xl  text-navy-blue right-[20px] z-[10] max-md:right-[15px]"
                  />
                ) : (
                  <MdRemoveRedEye
                    onClick={changeShowPasswordStatus}
                    className="absolute top-[50%] translate-y-[-50%] text-xl text-navy-blue right-[20px] z-[10] max-md:right-[15px] "
                  />
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <span className="spacing-4 font-semibold">No account yet?</span>
              <Link
                className="font-bold text-right text-blue-900"
                href="/signup"
              >
                {" "}
                Sign Up
              </Link>
            </div>

            <div className="w-full text-">
              <Link
                href="/forgot-password"
                className="text-blue-900 text-right font-bold"
              >
                {" "}
                Forgot Password
              </Link>
            </div>
            <p
              style={
                formResponse === "Login Successful"
                  ? { color: "green" }
                  : { color: "red" }
              }
              className="text-center"
            >
              {formResponse ? formResponse : ""}
            </p>
            <div className="flex items-center justify-center w-full">
              <Button isFetching={isFetching}>
                {isFetching ? "Please Wait ..." : "Login"}
              </Button>
            </div>
          </form>
        </div>
      </LayoutAuth>    
  );
};

export default Login;
