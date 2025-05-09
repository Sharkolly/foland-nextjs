/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import API from "../../API/Api";
import axios, { AxiosError } from "axios";
import Button from "../../Props/Button";

const CTA = () => {
  const [email, setEmail] = useState<string>("");
  const [messageFromServer, setMessageFromServer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const submitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data } = await API.post("/foland-realty/subscribe", {
        email,
      });
      setMessageFromServer(data.message);
      localStorage.setItem("isSubscribed", "true");
    } catch (error) {
      const AxiosErr = error as AxiosError<{ message?: string }>;
      const errorMessage =
        AxiosErr.response?.data?.message || "An unexpected error occurred";
      setMessageFromServer(errorMessage);
    } finally {
      setIsSubmitting(false);
      setEmail("");
    }
  };

  useEffect(() => {
    if (messageFromServer) {
      setTimeout(() => {
        setMessageFromServer("");
      }, 2000);
    }
  }, [messageFromServer]);

  return (
    <div>
      <div
        className="py-16 flex justify-center items-center  max-md:py-14 "
        style={{
          background:
            "linear-gradient(rgba(247,247,253,0.5),#F7F7FD,rgba(247,247,253,0.5))",
        }}
      >
        <div className="w-10/12 text-center mx-auto max-md:w-[91%]">
          <div className="flex flex-col text-center justify-center items-center gap-6">
            <p className="text-semi-navy-blue text-2xl tracking-wide font-bold">
              No Spam Promise
            </p>
            <h1 className="text-navy-blue text-3xl tracking-wide font-bold">
              Are you a landlord?
            </h1>
            <p className="text-stroke-grey text-md ">
              Discover ways to increase your home's value and get listed. No
              Spam.
            </p>
          </div>

          <form
            onSubmit={(e) => submitEmail(e)}
            className="bg-white flex justify-between py-3 w-6/12 mx-auto max-xl:w-8/12 max-lg:w-10/12 max-md:w-full px-6 mt-6 mb-4 max-md:px-2 max-md:flex-col max-md:gap-4 rounded-lg max-md:bg-transparent"
          >
            <input
              onChange={(e) => onChangeEmail(e)}
              value={email}
              type="text"
              className="outline-none border-none w-[75%] max-md:w-full max-md:bg-white max-md:px-5 max-md:py-3 max-md:rounded-lg"
              placeholder="Enter your email address"
            />
            <Button>{isSubmitting ? "Please Wait ..." : "Submit"}</Button>
          </form>
          <div className="text-center my-6">
            <p
              className={` ${
                messageFromServer === "Subscribed successfully!"
                  ? "text-green-600"
                  : "text-red-600"
              }  mt-2.5 text-center`}
            >
              {messageFromServer && messageFromServer}{" "}
            </p>
          </div>

          <div className="text-center">
            <p className="text-cta-grey text-md tracking-wide ">
              Join <span className="text-navy-blue text-md">10,000+</span> other
              landlords in our{" "}
              <span className="text-navy-blue text-md">Foland</span> community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
