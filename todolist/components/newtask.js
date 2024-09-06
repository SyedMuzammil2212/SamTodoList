import React, { useState } from "react";

const Newtask = ({ open, setopen }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className=" w-full bg-white flex flex-col gap-6 p-6 rounded-2xl border-[1px] border-gray-600 ">
      <div className=" text-black text-[24px] font-semibold flex w-full items-center justify-between   ">
        <div> Add New Task</div>
        <div
          className=" cursor-pointer "
          onClick={() => {
            setopen(false);
          }}
        >
          x
        </div>
      </div>
      <div className=" flex flex-col gap-2 ">
        <div className=" text-black   ">Enter title</div>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title"
          className=" outline-none text-black border-[2px] border-gray-600 rounded-xl px-3 py-1  "
        />
      </div>
      <div className=" flex flex-col gap-2 ">
        <div className=" text-black   ">Enter description</div>
        <input
          type="text"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          placeholder="Description"
          className=" outline-none text-black border-[2px] border-gray-600 rounded-xl px-3 py-1  "
        />
      </div>
      <div className="text-black border-[2px] border-gray-600 rounded-xl px-3 py-1 cursor-pointer w-fit ">
        Add Task
      </div>
    </div>
  );
};

export default Newtask;
