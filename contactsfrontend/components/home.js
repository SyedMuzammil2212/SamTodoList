"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Navbar from "./navbar";
import Welcome from "./welcome";
import Baseone from "./baseone";
import Basetwo from "./basetwo";

const MainHome = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div className=" w-full bg-black h-screen  ">
      <Navbar />
      <div className=" px-4 flex h-[80%] w-full gap-4  ">
        <div className=" w-[45%] h-full flex flex-col gap-4  ">
          <div className=" w-full border-[2px] border-gray-800 h-[40%] rounded-3xl ">
            <Welcome />
          </div>
          <div className=" w-full border-[2px] border-gray-800 h-[60%] rounded-3xl ">
            <Baseone />
          </div>
        </div>
        <div className=" w-[55%] h-full border-[2px] border-gray-800 rounded-3xl ">
          <Basetwo />
        </div>
      </div>
    </div>
  );
};

export default MainHome;
