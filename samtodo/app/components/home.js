import React from "react";

const Homewrapper = () => {
  return (
    <div className="w-full h-screen bg-[#252525] p-5">
      <div className=" w-full flex flex-col items-center justify-center ">
        <div className=" text-white font-sans font-semibold text-[32px]   ">
          Welcome Muzammil
        </div>
        <div className=" text-white font-sans italic font-semibold text-[32px]   ">
          Sam Todo List
        </div>
      </div>

      <div className=" flex flex-col pt-8 w-full gap-5  ">
        <div className=" text-[24px] font-semibold text-white ">Your Todos</div>

        <div className=" border-[1px] border-[#F7F7F7] rounded-lg h-[38px] pl-6 focus:border-white  w-[50%] flex items-center justify-center     ">
          <input
            className=" h-full w-full outline-none bg-transparent placeholder:text-[#666666] placeholder:text-[16px] text-white text-[16px]  "
            placeholder="Search note..."
          />
        </div>
      </div>
    </div>
  );
};

export default Homewrapper;
