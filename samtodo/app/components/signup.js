"use client";
import { registerUser } from "@/api/api";
import { useRouter } from "next/navigation"; // Ensure you're importing from 'next/navigation'
import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter(); // Correct import from 'next/navigation'

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      await registerUser({ username: username, password: password });
      router.push("/login"); // Redirect to login after successful registration
    } catch (err) {
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen bg-[#252525] flex flex-col items-center justify-center gap-12 text-white">
      <div className="text-white text-[32px] font-semibold">
        Sign Up To SamTodo
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <form onSubmit={handleSignup} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 items-start">
          <label className="font-medium text-[20px]">Enter Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            className="placeholder:text-gray-700 bg-[#252525] outline-none px-2 py-1 rounded-lg border-[1px] border-white"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label className="font-medium text-[20px]">Enter Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="placeholder:text-gray-700 bg-[#252525] outline-none px-2 py-1 rounded-lg border-[1px] border-white"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-fit px-4 cursor-pointer border-white border-[1px] rounded-lg bg-[#6C63FF] py-2 leading-none"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
