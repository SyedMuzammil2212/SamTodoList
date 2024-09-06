"use client";
import { loginUser } from "@/api/api";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { token } = await loginUser({ username, password });
      localStorage.setItem("token", token);
      router.push("/"); // Store the token
      // Redirect to todos page or show success message
    } catch (error) {
      console.error("Login failed:", error);
      // Show error message to the user
    }
  };
  return (
    <div className=" w-full h-screen bg-[#252525] flex flex-col items-center justify-center gap-12 text-white ">
      <div className=" text-white text-[32px] font-semibold   ">
        Login To SamTodo
      </div>
      <div className=" flex flex-col gap-2 items-start    ">
        <div className=" font-medium text-[20px]   ">Enter Username</div>
        <input
          placeholder="Enter Username"
          className="  placeholder:text-gray-700 bg-[#252525] outline-none px-2 py-1 rounded-lg  border-[1px] border-white  "
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className=" flex flex-col gap-2 items-start    ">
        <div className=" font-medium text-[20px]   ">Enter Password</div>
        <input
          placeholder="Enter Password"
          className="  placeholder:text-gray-700 bg-[#252525] outline-none px-2 py-1 rounded-lg  border-[1px] border-white  "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div
        className=" w-fit px-4 cursor-pointer border-white border-[1px] rounded-lg bg-[#6C63FF] py-2 leading-none  "
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </div>
    </div>
  );
};

export default Login;
