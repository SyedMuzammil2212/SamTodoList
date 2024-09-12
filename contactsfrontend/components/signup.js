"use client";
import UserRegister from "@/api/userRegister";
import Eye from "@/app/icons/eye";
import Eyeslash from "@/app/icons/eyelash";
import Logo from "@/app/icons/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [picture, setpicture] = useState();
  const [preview, setPreview] = useState();
  const route = useRouter();

  useEffect(() => {
    console.log(picture, "pictureee");
  }, [picture]);

  // References for inputs
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      route.push("/dashboard");
    }
  }, [route]);

  const handleSignin = async () => {
    if (!email || !password || !name) {
      alert("Please enter all details");
      return;
    }
    const formData = new FormData();
    formData.append("username", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("picture", picture);

    const res = await UserRegister(formData);
    console.log(res);
    if (res._id) {
      route.push("/login");
    } else {
      alert(`${res.error}`);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setpicture(file);
      setPreview(URL.createObjectURL(file)); // Create preview URL
    } else {
      setpicture(null);
      setPreview(null); // Reset preview if not an image
    }
  };

  return (
    <div className="w-full">
      <div className="w-full flex h-screen bg-[#5B86E582]">
        <div className="w-[40%] h-full flex flex-col items-center justify-evenly px-6 font-sans">
          <div className="text-[50px] text-[#FFFFFF]">
            Need a place to store all your{" "}
            <span className="text-[#6391f5] font-bold">favourite Contacts</span>
          </div>
          <div className="w-[200px]">
            <Logo />
          </div>
        </div>
        <div className="w-[60%] h-full bg-white rounded-l-[60px] flex flex-col items-center justify-evenly">
          <div className="font-bold text-black text-[30px]">Signup</div>
          <div className="flex flex-col gap-8">
            {preview && (
              <div className="mt-4 flex gap-4 items-center  ">
                <h3>Image Preview:</h3>
                <div className=" w-[150px] h-[150px] rounded-full border-[1px] border-gray-600">
                  <img
                    src={preview}
                    alt="Selected"
                    className=" h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
            )}
            <input
              className=" w-[400px] outline-none px-2 placeholder:text-[#9D9D9D] text-[16px] border-b-[1px] border-[#9D9D9D] py-2  "
              placeholder="Uploadfile"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <input
              className="w-[400px] outline-none px-2 placeholder:text-[#9D9D9D] text-[16px] border-b-[1px] border-[#9D9D9D] py-2"
              placeholder="Username"
              value={name}
              onChange={(e) => setname(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  emailInputRef.current.focus(); // Move focus to email
                }
              }}
            />
            <input
              ref={emailInputRef} // Reference for email input
              className="w-[400px] outline-none px-2 placeholder:text-[#9D9D9D] text-[16px] border-b-[1px] border-[#9D9D9D] py-2"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  passwordInputRef.current.focus(); // Move focus to password
                }
              }}
            />
            <div className=" relative ">
              <input
                ref={passwordInputRef} // Reference for password input
                className="w-[400px] outline-none px-2 placeholder:text-[#9D9D9D] text-[16px] border-b-[1px] border-[#9D9D9D] py-2"
                placeholder="Password"
                type={show ? "text" : "password"} // Fix typo from passowrd to password
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSignin(); // Trigger signup on Enter
                  }
                }}
              />
              <div
                className=" absolute top-[50%] -translate-y-1/2 right-4 cursor-pointer "
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? <Eye /> : <Eyeslash />}
              </div>
            </div>
            <div
              className="w-[400px] cursor-pointer bg-[#5B86E5] hover:bg-[#cfcfcf] py-4 rounded-lg flex items-center justify-center hover:text-[#5B86E5] duration-300 text-[#FFFFFF] font-bold leading-none"
              onClick={handleSignin}
            >
              <div>Signup</div>
            </div>
            <div className="py-4 w-[400px] text-[16px] text-black flex items-center justify-center">
              <div>
                Already have an account?{" "}
                <Link href="/login">
                  <span className="text-[#6391f5] font-bold">Login Here</span>
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
