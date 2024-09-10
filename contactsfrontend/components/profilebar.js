import getUser from "@/api/getUser";
import Halfarrow from "@/app/icons/halfArrow";
import Profile from "@/app/icons/profile";
import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import Logout from "@/app/icons/logout";
import Spinner from "./spinner";
import { useRouter } from "next/navigation";

const Profilebar = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const route = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const getUserData = async () => {
      const res = await getUser(token);
      setData(res.data);
      setLoading(false);
      console.log(res.data, "resss");
    };
    getUserData();
  }, []);
  return loading ? (
    <div className=" h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-black  ">
      <Spinner />
    </div>
  ) : (
    <div className=" relative  ">
      <div
        className=" bg-white w-[240px]  rounded-[100px] px-5 py-2 flex items-center cursor-pointer justify-between "
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className=" flex gap-2 items-center ">
          <Profile />
          <div className=" flex flex-col   ">
            <div className=" text-black text-[16px] ">{data?.username}</div>
            <div className=" text-black text-[16px] ">{data?.email}</div>
          </div>
        </div>
        <motion.div
          initial={{
            rotate: "0deg",
          }}
          animate={{
            rotate: open ? "180deg" : "0deg",
            // paddingTop: open ? "12px" : 0,
          }}
          transition={{
            ease: easeInOut,
          }}
        >
          <Halfarrow />
        </motion.div>
      </div>
      <motion.div
        className=" w-[240px] absolute top-[4.5rem] left-0  overflow-hidden bg-white  flex items-center justify-center rounded-[100px] "
        initial={{
          height: 0,
        }}
        animate={{
          height: open ? "fit-content" : 0,
        }}
      >
        <div
          className=" flex items-center gap-3 py-4 cursor-pointer  "
          onClick={() => {
            setLoading(true);
            localStorage.removeItem("token");
            route.push("/login");
          }}
        >
          <Logout />
          <div className=" font-Matter text-[#EE5454] text-[0.9rem] leading-none ">
            Log out
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profilebar;
