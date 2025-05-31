'use client';
// import {useRef} from "react";
import Btn from "./Btn";
import { IoSend } from "react-icons/io5";

const GetInTouch = () => {
  const btn = [
    { name: "How to access agent", mobile: true },
    { name: "Add Property", mobile: true },
    { name: "Pay Installmentally", mobile: false },
    { name: "Can't reach landlord", mobile: false },
    { name: "Didn't see buyer", mobile: false },
    { name: "Can't delete property", mobile: false },
  ];
  // const textareaRef = useRef<HTMLTextAreaElement>(null);

  // const handleInput = () => {
  //   const textarea = textareaRef.current;
  //   if(textarea) {
  //     textarea.style.height = 'auto';
  //     textarea.style.height = `${textarea.scrollHeight}px`
  //   }
  // }
  return (
    <section>
      <div className="bg-navy-blue">
        <div className="w-[88%] mx-auto ">
          <h1 className="text-white py-3.5 font-bold text-2xl">
            Get In Touch With Foland
          </h1>
        </div>
      </div>

      <div
        className="bg-cover bg-center w-full relative pb-10 max-md:pb-7"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${"/images/Modern-house.jpg"})`,
        }}
      >
        <div>
          <h2 className="text-white text-center tracking-wide pt-20 text-2xl w-[55%] mx-auto max-lg:w-[75%] max-md:w-[90%] max-md:pt-10">
            Whether you&apos;re buying, selling, renting, or need support - our
            team is here to help. Reach out via chat email, or the contact form
            below
          </h2>
        </div>

        <div className="flex justify-center items-center mt-24  mb-16 max-md:mt-16 ">
          <div className="border-3 border-gray-500 w-[50%] rounded-lg mx-auto max-lg:w-[75%] max-md:w-[92%]">
            <div className="max-md:px-4 bg-navy-blue text-white text-center py-6 flex flex-col gap-4 ">
              <h2 className="font-semibold text-2xl">Live Support</h2>
              <p className="text-[.9em]">
                Chat with a Foland agent in real-time to get instant assistance.{" "}
                <br /> Available Monday to Saturday, 9AM - 6PM WAT.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-lg px-7 pb-7 max-md:px-4">
                <div className=" pt-3 pb-5 grid grid-cols-4 max-2xl:grid-cols-3 max-md:grid-cols-1 gap-4">
                  {btn.map((button, index) => (
                    <Btn key={index} mobile={button.mobile}>
                      {button.name}
                    </Btn>
                  ))}
                </div>

                <div className="flex w-[85%] max-lg:w-full py-2 mt-6 max-lg:mt-1 rounded-lg px-3 items-center mx-auto gap-3 border-2 border-navy-blue">
                  <span>Icon</span>
                  <div className="w-full">
                    <input
                      type="text"
                      className="w-[97%] break-words overflow-scroll outline-none border-none"
                      placeholder="How can we assist you today?"
                    />
                        {/* <textarea ref={textareaRef} onInput={handleInput}  name='Message' placeholder="Type Your  Message..." className='w-full px-2 py-1.5 border-none h-[40px] rounded outline-none mt-1 resize-none no-scrolbar overflow-hidden break-words  border-gray-300' ></textarea> */}
                  </div>
                  <span className="text-navy-blue text-xl">
                    <IoSend />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
