"use client";
import getUser from "@/api/getUser";
import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const getUserData = async () => {
      const res = await getUser(token);
      setData(res.data);

      console.log(res.data, "resss");
    };
    getUserData();
  }, []);
  return (
    <div className=" w-full h-full flex flex-col items-center gap-5 justify-center ">
      <div className=" text-white font-bold text-[32px]  ">
        Welcome <span className=" text-blue-400 italic ">{data?.username}</span>{" "}
      </div>
      <div className=" text-white font-medium text-[20px]  ">
        Your contacts, your way. Efficiently.
      </div>
    </div>
  );
};

export default Welcome;
