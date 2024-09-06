"use client";
import Link from "next/link";
import React, { useState } from "react";
import Newtask from "./newtask";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
        <Link className="text-white font-bold" href={"/"}>
          Muzammil.
        </Link>
        <div
          className="bg-white p-2 cursor-pointer  "
          onClick={() => {
            setOpen(!open);
          }}
        >
          Add Task
        </div>
      </nav>
      {open && (
        <div className=" h-screen w-screen bg-black opacity-50 fixed top-0 left-0 z-10 "></div>
      )}
      {open && (
        <div className=" h-screen w-screen fixed top-0 left-0 z-20 flex items-center justify-center     ">
          <div className=" w-[400px] ">
            <Newtask open={open} setopen={setOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
