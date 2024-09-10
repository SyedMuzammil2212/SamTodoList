"use client";
import UserRegister from "@/api/userRegister";
import Logo from "@/app/icons/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const route = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      route.push("/dashboard");
    }
  }, []);

  const handleSignin = async () => {
    const res = await UserRegister(name, email, password);
    console.log(res);
    if (res._id) {
      route.push("/login");
    } else {
      alert(`${res.error}`);
    }
  };
  return (
    <div className=" w-full">
      <div className=" w-full flex h-screen bg-[#5B86E582]  ">
        <div className=" w-[40%] h-full flex flex-col items-center justify-evenly  px-6 font-sans  ">
          <div className=" text-[50px] text-[#FFFFFF]  ">
            {" "}
            Need a place to store all your{" "}
            <span className=" text-[#6391f5] font-bold  ">
              favourite Contacts
            </span>
          </div>
          <div className=" w-[200px]  ">
            <Logo />
          </div>
        </div>
        <div className=" w-[60%] h-full bg-white rounded-l-[60px] flex flex-col items-center justify-evenly   ">
          <div className=" font-bold text-black text-[30px]  ">Signup</div>
          <div className=" flex flex-col gap-8 ">
            <input
              className=" w-[400px] outline-none placeholder:text-[#9D9D9D] text-[16px] border-b-[1px] border-[#9D9D9D] py-2 "
              placeholder=" Username "
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              className=" w-[400px] outline-none placeholder:text-[#9D9D9D] text-[16px] border-b-[1px] border-[#9D9D9D] py-2 "
              placeholder=" E-mail "
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              className=" w-[400px] outline-none placeholder:text-[#9D9D9D] text-[16px] border-b-[1px] border-[#9D9D9D] py-2 "
              placeholder=" Password "
              type="passowrd"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <div
              className=" w-[400px] cursor-pointer bg-[#5B86E5] hover:bg-[#cfcfcf] py-4 rounded-lg flex items-center justify-center hover:text-[#5B86E5] duration-300 text-[#FFFFFF] font-bold leading-none  "
              onClick={() => {
                if (!email || !password || !name) {
                  alert("please enter all details");
                }
                handleSignin();
              }}
            >
              <div>Signup</div>
            </div>
            <div className=" py-4 w-[400px] text-[16px] text-black flex items-center justify-center ">
              <div>
                Already have an account?{" "}
                <Link href={"/login"}>
                  {" "}
                  <span className="text-[#6391f5] font-bold "> Login Here</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
