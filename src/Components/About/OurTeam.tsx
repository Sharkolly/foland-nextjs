import Image from "next/image";
const OurTeam = () => {
  const teamMembers = [
    {
      name: "Esther Howard",
      role: "Assistant Manager",
      img: "/images/Rectangle 108.png",
      bio: "Alice Smith is a real estate agent with 15 years of experience. She specializes in luxury properties and has helped many clients find their dream homes.",
    },
    {
      name: "Adesanya Mofeoluwa (Fola)",
      role: "Founder & Software Developer",
      img: "/images/Rectangle 13.png",
      bio: "Adesanya Mofeoluwa (Fola) is the lead software developer behind Foland Realty's digital eccosystem. He builds and maintains the platforms that power our property listings, tenant experiences, and landlord tools. With a passion for functional design and smart systems, he ensures Foland Realty runs smoothly online.",
    },
    {
      name: "Jideofor Nelson",
      role: "Co-Founder & Front-end Developer",
      img: "/images/Nelson.jpg",
      bio: "I’m Jideofor Nelson Chidi, a Front-End Web Developer and Designer dedicated to creating sleek, interactive, and user-friendly digital experiences at Foland’s Realty. I’m here to craft a seamless connection between landlords, agents, and tenants through a dynamic and intuitive web interface. I aim to make your journey through our digital ecosystem effortless and enjoyable. So sit back, explore, and experience real estate made simple and smart",
    },
    {
      name: "Olusanya Adebayo Paul",
      img: "/images/Paul.jpg",
      role: "Co-Founder & UI/UX Designer",
      bio: "Olusanya Adebayo is a skilled UI/UX designer passionate about crafting intuitive digital experiences. At Foland, he helps design user-friendly interfaces that streamline interactions for landlords, tenants, and agents, combining creative design with technical knowledge from his background in electrical engineering.",
    },
    {
      name: "Ituola Praise-Jah Oluwadamilola",
      role: "Co-Founder & UX Designer",
      img: "/images/Praise-jah.jpg",
      bio: "Hi, I'm Praise-Jah, a UX designer with years of experience creating intuitive, user-friendly designs. At Foland Realty, I focus on enhancing the experience for both landlords and tenants through thoughtful, seamless design. Delighted to contribute my skills and ensure your journey is smooth and efficient.",
    },
    {
      name: "Adeyemi Ayodeji",
      img: "/images/Deji.jpg",
      role: "Co-Founder & UX Designer",
      bio: "I’m Adeyemi Ayodeji Emmanuel, a UI/UX designer passionate about creating clean, functional, and user focused digital experiences. I’m excited to be part of the Foland team, tackling real-life housing challenges through smart, human centered design. At Foland Realty, we’re in the business of turning clicks into keys and I’m here to make sure every user journey feels just like home.",
    },
  ];

  return (
    <div>
      <div className="bg-navy-blue">
        <div className="w-10/12 mx-auto max-md:w-[91%] max-lg:w-[88%] py-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-3xl font-bold">MEET OUR TEAM</h1>
            <p className="text-gray-500 tracking-wider leading-6 max-md:leading-[1.9]  text-[.9em]">
              Our team is made up of dedicated real estate professionals who
              share a passion for what they do. We are not just agents; we are
              your trusted advisors. Our agents are experienced, knowledgeable,
              and ready to assist you in achieving your real estate goals.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-8 py-16 max-md:grid-cols-1 max-lg:grid-cols-2 max-2xl:grid-cols-3 items-stretch">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col w-full gap-2">
                  <Image
                    width={500}
                    height={300}
                    src={member.img}
                    className="rounded-lg mb-3 w-full h-[450px] object-center object-cover"
                    alt={member.name}
                  />
                  <h3 className="text-white text-2xl font-bold">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 tracking-wide font-semibold">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-[.8em]">{member.bio}</p>
                  <div className="w-full h-[1px] mt-2 bg-gray-700"></div>
                </div>
              ))}
            </div>

            <div>
              <div className="grid grid-cols-2 gap-20 max-lg:gap-10 max-md:gap-5 py-16 max-md:py-0 max-md:grid-cols-1 ">
                <div className="w-">
                  <h1 className="text-4xl text-white leading-13  font-bold">
                    BECOME A PART OF THE TEAM
                  </h1>
                  <p className="mt-3 mb-5 text-sm text-justify max-lg:text-left leading-[1.8] text-gray-600 max-md:leading-[2.1]  text-[.9em]">
                    &quot;We&apos;re always getting better, forging strong
                    business connections, and valuing every team member as a
                    vital part of our energetic, knowledgeable, and powerful
                    team.&quot;.
                    <br />
                    Our journey in the real estate industry has been marked by a
                    deep commitment to excellence, a passion for helping clients
                    achieve their goals, and an unwavering dedication to
                    professionalism.
                  </p>
                </div>
                <div className="w-full relative  rounded-xl max-lg:w-full ">
                  <Image
                    src="/images/Frame 133.png"
                    width={1200}
                    height={800}
                    className="w-[90%] h-auto max-2xl:w-full max-md:w-full object-center object-cover rounded-xl  "
                    alt="Team Photo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
