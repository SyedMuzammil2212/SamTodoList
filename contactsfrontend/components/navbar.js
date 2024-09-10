import Logo from "@/app/icons/logo";
import React from "react";
import Profilebar from "./profilebar";

const Navbar = () => {
  return (
    <div className=" w-full px-4 pt-2 pb-4 z-[50] relative ">
      <div className=" w-full bg-gray-700 px-6 py-4 flex items-center justify-between rounded-[60px] ">
        <div className=" flex items-center justify-center gap-2 ">
          <div className=" w-[60px] ">
            <Logo />
          </div>
          <div className=" text-[#6391f5] font-bold italic text-[24px] leading-none ">
            Smart Sync
          </div>
        </div>
        <Profilebar />
      </div>
    </div>
  );
};

export default Navbar;
