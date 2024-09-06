import React from "react";

const Topiclist = ({ head, matter }) => {
  return (
    <div className=" w-full flex items-start justify-between border-black border-[2px] ">
      <div className=" flex flex-col w-[80%] gap-4 ">
        <div className=" text-black font-semibold text-[30px]   ">{head}</div>
        <div className=" text-black font-medium text-[12px]   ">{matter}</div>
      </div>
      <div className=" flex items-start gap-2  ">
        <div>Del</div>
        <div>Edit</div>
      </div>
    </div>
  );
};

export default Topiclist;
