"use client";
import React, { useState } from "react";
import Edittask from "./edittask";

const Topiclist = ({ head, matter }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" w-full flex items-center justify-center  my-4 ">
        <div className=" w-[80%]  flex items-start justify-between border-black border-[2px]  ">
          <div className=" flex flex-col w-[80%] gap-4 ">
            <div className=" text-black font-semibold text-[30px]   ">
              {head}
            </div>
            <div className=" text-black font-medium text-[12px]   ">
              {matter}
            </div>
          </div>
          <div className=" flex items-start gap-4 px-6   ">
            <div className=" cursor-pointer ">Del</div>
            <div
              className=" cursor-pointer "
              onClick={() => {
                setOpen(true);
              }}
            >
              Edit
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className=" h-screen w-screen bg-black opacity-50 fixed top-0 left-0 z-10 "></div>
      )}
      {open && (
        <div className=" h-screen w-screen fixed top-0 left-0 z-20 flex items-center justify-center     ">
          <div className=" w-[400px] ">
            <Edittask open={open} setopen={setOpen} />
          </div>
        </div>
      )}
    </>
  );
};

export default Topiclist;
