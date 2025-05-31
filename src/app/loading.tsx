'use client'
import Image from "next/image";
import { useState, useEffect } from "react";


const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after page fully loads
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null; // Hide preloader when loading is false

  return (
    <div className="fixed top-0 left-0 w-full h-[95vh] bg-white flex justify-center items-center z-[150]">
      <Image width={200} height={140} src="/loading3.gif" alt="Loading..." className=" w-[100%]" />
    </div>
  );
};

export default Loading;
