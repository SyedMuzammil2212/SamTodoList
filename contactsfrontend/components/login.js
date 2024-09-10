"use client";
import Userlogin from "@/api/userLogin";
import Logo from "@/app/icons/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const route = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      route.push("/dashboard");
    }
  }, []);

  const handleSignin = async () => {
    const res = await Userlogin(email, password);

    if (res?.accesstoken) {
      route.push("/dashboard");
    } else {
      alert(`${res.error}`);
    }
    console.log(res, "ressss");
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
          <div className=" font-bold text-black text-[30px]  ">Log-in</div>
          <div className=" flex flex-col gap-8 ">
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
              className=" w-[400px] cursor-pointer bg-[#5B86E5] py-4 rounded-lg flex items-center justify-center text-[#FFFFFF] font-bold leading-none  "
              onClick={() => {
                if (!email && !password) {
                  alert("please enter all details");
                }
                handleSignin();
              }}
            >
              <div> Login</div>
            </div>
            <div className=" py-4 w-[400px] text-[16px] text-black flex items-center justify-center ">
              <div>
                Don’t have an account?{" "}
                <Link href={"/signup"}>
                  {" "}
                  <span className="text-[#6391f5] font-bold ">
                    {" "}
                    Signup Here
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
