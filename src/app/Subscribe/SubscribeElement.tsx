/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useContextStore } from "../Store/Context";

const SubscribeElement = () => {
  const [email, setEmail] = useState<string>("");
  const { setShowModal } = useContextStore();
  const [messageFromServer, setMessageFromServer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        // "http://localhost:3001/subscribe",
        "https://foland-realty-server.onrender.com/subscribe",
        {
          email,
        }
      );
      setMessageFromServer(data.message);
      localStorage.setItem("isSubscribed", "true");
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    } catch (error) {
      const AxiosErr = error as AxiosError<{ message?: string }>;
      const errorMessage =
        AxiosErr.response?.data?.message || "An unexpected error occurred";
      setMessageFromServer(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  const removeModal = () => {
    setShowModal(false);
    localStorage.setItem("isSubscribed", "true");
  };

  useEffect(() => {
    if (messageFromServer) {
      setTimeout(() => {
        setMessageFromServer("");
      }, 2000);
    }
  }, [messageFromServer]);

  return (
    <div className="fixed bottom-0 bg-linear-gradient w-full h-full flex items-center justify-center">
      {/* <div className='flex items-center justify-center'>
        <button>X</button>
    </div> */}

      <div className="animation-subscribe-modal  bg-black w-[30%] max-md:w-[92%] max-md:mx-auto rounded-md py-8 px-5 flex z-[99] flex-col items-center justify-center gap-6">
        <h1 className="text-2xl text-white font-bold">
          Subscribe to our newsletter
        </h1>
        <form onSubmit={(e) => onSubmit(e)} className="w-[95%]">
          <input
            onChange={(e) => onChangeEmail(e)}
            className="w-full outline-none text-white pl-3 h-[2.5em] border border-gray-400 rounded-md"
            placeholder="Enter email address"
            type="email"
          />
          <div className="flex justify-between w-full gap-4">
            <button
              className={`${
                isSubmitting ? "opacity-[.6]" : ""
              } cursor-pointer  hover:font-bold bg-blue-800 text-white px-8 pointer rounded-lg py-2.5 mt-5 w-full`}
              type="submit"
            >
                {isSubmitting ? "Please Wait ..." : "Subscribe"}
            </button>
            <button
              className={` ${
                isSubmitting ? "opacity-[.6]" : ""
              } cursor-pointer  hover:font-bold bg-white text-blue-800 w-full   px-8 pointer rounded-lg py-2.5 mt-5`}
              onClick={removeModal}
            >
                {isSubmitting ? "Please Wait ..." : "Cancel"}
            </button>
          </div>

          <p
            className={` ${
              messageFromServer === "Subscribed successfully!"
                ? "text-green-600"
                : "text-red-600"
            }  mt-2.5 text-center`}
          >
            {messageFromServer && messageFromServer}{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SubscribeElement;
