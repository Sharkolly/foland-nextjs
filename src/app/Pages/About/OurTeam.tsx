/* eslint-disable @typescript-eslint/no-unused-vars */
import teamMember1 from "../../Images/Rectangle 10.png";
import teamMember2 from "../../Images/Rectangle 12.png";
import teamMember3 from "../../Images/Rectangle 108.png";
import teamMember4 from "../../Images/Rectangle 13.png";
import teamMember5 from "../../Images/Rectangle 7.png";
import teamMember6 from "../../Images/Rectangle 5.png";
import teamMember7 from "../../Images/Rectangle 14.png";
import teamMember8 from "../../Images/Rectangle 124.png";
import team from "../../Images/Frame 133.png";
const OurTeam = () => {
  const teamMembers = [
    {
      name: "Cameron Williamson",
      role: "Marketing Coordinator",
      img: teamMember1,
      bio: "John Doe is a real estate agent with 10 years of experience. He specializes in residential properties and has helped many clients find their dream homes.",
    },
    {
      name: "Floyd Miles",
      role: "Leading Design Engineer",
      img: teamMember2,
      bio: "Jane Doe is a real estate agent with 5 years of experience. She specializes in commercial properties and has helped many clients find the perfect space for their businesses.",
    },
    {
      name: "Esther Howard",
      role: "Assistant Manager",
      img: teamMember3,
      bio: "Alice Smith is a real estate agent with 15 years of experience. She specializes in luxury properties and has helped many clients find their dream homes.",
    },
    {
      name: "Savannah Nguyen",
      role: "Head of the Group",
      img: teamMember4,
      bio: "Alice Smith is a real estate agent with 15 years of experience. She specializes in luxury properties and has helped many clients find their dream homes.",
    },
    {
      name: "Courtney Henry",
      role: "Assistant Manager",
      img: teamMember5,
      bio: "Alice Smith is a real estate agent with 15 years of experience. She specializes in luxury properties and has helped many clients find their dream homes.",
    },
    {
      name: "Robert Fox",
      role: "Chief Engineer",
      img: teamMember6,
      bio: "Alice Smith is a real estate agent with 15 years of experience. She specializes in luxury properties and has helped many clients find their dream homes.",
    },
    {
      name: "Kathryn Murphy",
      role: "Assistant Manager",
      img: teamMember7,
      bio: "Alice Smith is a real estate agent with 15 years of experience. She specializes in luxury properties and has helped many clients find their dream homes.",
    },
    {
      name: "Devon Lane",
      role: "Project Coordinator",
      img: teamMember8,
      bio: "Alice Smith is a real estate agent with 15 years of experience. She specializes in luxury properties and has helped many clients find their dream homes.",
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
            <div className="grid grid-cols-4 gap-8 py-16 max-md:grid-cols-1 max-lg:grid-cols-2 max-2xl:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <img
                    src={member.img}
                    className="rounded-lg mb-3 object-center object-cover"
                    alt={member.name}
                  />
                  <h3 className="text-white text-2xl font-bold">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 tracking-wide  text-[em]">
                    {member.role}
                  </p>
                  <div className="w-full h-[1px] mt-2 bg-gray-700"></div>
                  {/* <p>{member.bio}</p> */}
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
                    "We're always getting better, forging strong business
                    connections, and valuing every team member as a vital part
                    of our energetic, knowledgeable, and powerful team.".
                    <br />
                    Our journey in the real estate industry has been marked by a
                    deep commitment to excellence, a passion for helping clients
                    achieve their goals, and an unwavering dedication to
                    professionalism.
                  </p>
                </div>
                <div className="w-full relative  rounded-xl max-lg:w-full ">
                  <img
                    src={team}
                    className="h-[310px] w-[90%]  max-lg:h-[400px] max-md:h-[310px] max-2xl:w-full max-md:w-full object-center object-cover rounded-xl  "
                    alt=""
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
