import React from "react";
import Nav from "../Static/Nav";

const WithNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <>      
        <Nav />
        <main className='mt-[80px]'>{children}</main>
    </>
  );
};

export default WithNav;
