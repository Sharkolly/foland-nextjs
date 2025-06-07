import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="bg-navy-blue">
        <div className="flex gap-8 w-10/12 max-lg:w-[88%]  mx-auto max-lg:flex-col-reverse items-stretch max-md:py-10 py-16">
          <div className="basis-[50%]">
            <Image
              src='/images/unsplash_w3eFhqXjkZE.png'
              width={600}
              height={400}
              className="opacity-[.8] w-[95%] rounded-lg max-lg:w-full h-[600px] object-cover object-center"
              alt="About image"
            />
          </div>
          <div className="basis-[45%] max-2xl:basis-[50%] max-xl:basis-[59%]">
            <div className="border-l-2 border-b-2 pr-8  border-[#484848] pb-6 tracking-wide leading-7 pl-6 mb-7 rounded-md">
              <h1 className="text-4xl text-white font-bold pb-4 ">
                YOUR TRUSTED
                <br className="" /> REAL ESTATE PLATFORM
              </h1>
              <p className="text-white/60 text-[.9em]">
                Welcome to Foland, where your real estate aspirations meet
                expert guidance and personalized service. Our journey in the
                real estate industry has been marked by a deep commitment to
                excellence, a passion for helping clients achieve their goals,
                and an unwavering dedication to professionalism.
              </p>
            </div>
            <div className="pb-6 tracking-wide leading-7 pl-6 pr-8 pt-7 border-r-2 border-t-2 border-[#484848] rounded-md">
              <h1 className="text-4xl text-white font-bold pb-4">OUR STORY</h1>
              <p className="text-white/60 text-[.9em]">
                Founded by a team of seasoned real estate professionals, Foland
                was born out of a shared vision: to create a real estate
                experience that prioritizes the client&apos;s needs above all
                else. Our founders understood that the world of real estate can
                be complex, often daunting, and filled with opportunities as
                well as challenges. They set out to build a real estate agency
                that simplifies the process and empowers clients with the
                knowledge and resources needed to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
