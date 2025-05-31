import WithNav from "@/Components/Layout/WithNav";
import SideBar from "@/Components/Static/SideBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <WithNav>
      <SideBar />
      <main
        className="ml-[25%] rounded-lg w-[75%] max-xl:ml-[28%] max-xl:w-[73%] max-lg:ml-[35%] 
        max-md:w-[95%] max-md:mx-auto py-4 px-5 max-md:py-0 max-md:px-0 max-md:mb-[120px]"
      >
        {children}{" "}
      </main>
    </WithNav>
  );
};

export default layout;
