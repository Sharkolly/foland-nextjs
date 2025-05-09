/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavLink } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useContextStore } from "../Store/Context";
import { toast } from "react-toastify";
import Logo from "../Images/1-removebg-preview.png";
import Button from "./Button";
// import { Helmet} from 'react-helmet-async';

const Signup = () => {
  const { email, setEmail, password, setPassword } = useContextStore();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Tenant");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const changeShowPasswordStatus = () => {
    setShowPassword(!showPassword);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [formResponse, setFormResponse] = useState("");

  const firstNameOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const lastNameOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const regexForValidEmail = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const regexForValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const emailOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email: email.toLowerCase(),
      role,
      password,
    };

    try {
      setIsFetching(true);
      const sendData = await axios.post(
        // "http://localhost:3001/api/auth/signup",
        "https://foland-realty-server.onrender.com/api/foland-realty/auth/signup",
        formData
      );
      const { data } = await sendData;
      setFormResponse(data.message);
      setTimeout(() => {
        setFormResponse("");
      }, 4000);
      if (data.token) {
        const { data: response } = await axios.get(
          // "http://localhost:3001/api/auth/token-verify",
          // {
          "https://foland-realty-server.onrender.com/api/foland-realty/auth/token-verify",
          {
            headers: {
              Authorization: `${data.token}`,
            },
          }
        );
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", "true");
        location.replace("/properties");
      }
    } catch (error) {
      const axiosError = error as AxiosError<{
        message?: string;
        passwordValidationError?: string;
        emailValidationError?: string;
      }>;

      // const errorMessage =
      //   axiosError.response?.data?.message || "An unexpected error occurred.";
      // const passwordValidationErrorMessage =
      //   axiosError.response?.data?.passwordValidationError ||
      //   "An unexpected error occurred.";
      // const emailValidationErrorMessage =
      //   axiosError.response?.data?.emailValidationError ||
      //   "An unexpected error occurred.";

      if (axiosError.response?.data?.message) {
        setFormResponse(axiosError.response?.data?.message);
      }
      if (axiosError.response?.data?.emailValidationError) {
        setEmailError(axiosError.response?.data?.emailValidationError);
        console.log(emailError);
        setFormResponse("");
        setTimeout(() => {
          setEmailError("");
        }, 4000);
      }
      if (axiosError.response?.data?.passwordValidationError) {
        setPasswordError(axiosError.response?.data?.passwordValidationError);
        setFormResponse("");
        setTimeout(() => {
          setPasswordError("");
        }, 4000);
      }
    } finally {
      // setIsFetching(false);
      setTimeout(() => {
        setIsFetching(false);
      }, 2500);
    }
  };

  useEffect(() => {
    if (formResponse) {
      setTimeout(() => {
        setFormResponse("");
        setEmailError("");
      }, 4000);
    }
  }, [formResponse]);

  return (
    <div className="w-[80%]  mx-auto max-md:w-[90%]">
      {/* <Helmet> */}
      {/* <title>Sign Up- Foland Realty</title> */}
      {/* <meta name="description" content="Learn more about Foland Realty, our mission, and how we help you find and manage rental properties." /> */}
      {/* <meta name="keywords" content="about Foland Realty, real estate company, rental management, property leasing" /> */}
      {/* </Helmet> */}
      <div className="flex justify-center">
        <img src={Logo} className="scale-[.6]" alt="Foland Realty" />
      </div>
      <div className="">
        <h1 className="text-center  mt-0 font-bold text-2xl mb-9 max-md:mb-6">
          Sign Up to<span className="text-navy-blue"> Foland Realty</span>
        </h1>
      </div>
      <form className="flex flex-col gap-6" onSubmit={(e) => formSubmit(e)}>
        <div>
          <input
            className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
            type="text"
            name="firstname"
            placeholder="Firstname..."
            onChange={(e) => firstNameOnchangeInput(e)}
          />
        </div>

        <div>
          <input
            className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
            type="text"
            name="lastname"
            placeholder="Lastname..."
            onChange={(e) => lastNameOnchangeInput(e)}
          />
        </div>
        <div>
          <input
            className="w-full outline-none text-navy-blue pl-3 h-[2.5em] border border-gray-400 rounded-md"
            type="email"
            name="email"
            value={email.toLowerCase()}
            placeholder="Enter your email address..."
            onChange={(e) => emailOnchangeInput(e)}
          />
          <p className="text-md text-red-700">{emailError} </p>
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
                className="absolute top-[50%] translate-y-[-50%] text-xl  text-navy-blue right-[20px] z-[10] max-md:right-[15px] "
              />
            )}
          </div>
          <p className="text-sm text-red-700">{passwordError} </p>
        </div>

        <div className="flex gap-5 max-md:gap-3 max-[580px]:text-[.9em] max-[400px]:text-[.85em] text-slate-300 justify-between">
          <span className="font-bold">Sign as: </span>
          <div className="flex gap-3">
            <div className="flex gap-2 max-md:gap-1">
              <label htmlFor="tenant" className="text-yellow-700">
                Tenant
              </label>
              <input
                type="radio"
                value="Tenant"
                checked={role === "Tenant"}
                name="role"
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="flex gap-2 max-md:gap-1">
              <label htmlFor="Agent" className="text-green-600">
                Agent
              </label>
              <input
                type="radio"
                name="Role"
                checked={role === "Agent"}
                value="Agent"
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="flex gap-2 max-md:gap-1">
              <label htmlFor="Landlord" className="text-blue-900">
                Landlord
              </label>
              <input
                type="radio"
                name="Role"
                checked={role === "Landlord"}
                value="Landlord"
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="spacing-4">Already have an account?</span>
          <NavLink className="font-bold text-right text-navy-blue" to="/login">
            {" "}
            Login
          </NavLink>
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
          <Button>{isFetching ? "Please Wait ..." : "Sign Up"}</Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
