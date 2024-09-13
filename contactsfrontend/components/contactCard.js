import Profile from "@/app/icons/profile";
import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Delete from "@/app/icons/delete";
import deleteContact from "@/api/deleteContact";
import Edit from "@/app/icons/edit";
import updateContact from "@/api/updateContact";
import Image from "next/image";
import { BACKEND_URL } from "@/api/variables";

const ContactCard = ({ id, name, email, phone, sno, date, picture }) => {
  const [name1, setName] = useState(name);
  const [email1, setEmail] = useState(email);
  const [phone1, setPhone] = useState(phone);
  const [current, setCurrent] = useState(picture);
  const [cpreview, setCpreview] = useState(`${BACKEND_URL}/uploads/${picture}`);
  const [isPic, setIsPic] = useState(picture ? true : false);
  const fileInputRef = useRef(null); // Create a ref for the input

  // Function to handle div click
  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the input click when div is clicked
    }
  };

  // const data = {
  //   name: name1,
  //   email: email1,
  //   phone: phone1,
  // };

  function formatDate(isoString) {
    const date = new Date(isoString);

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const daySuffix = (day) => {
      if (day > 3 && day < 21) return "th"; // special case for teens
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${daySuffix(day)} ${month} ${year}`;
  }

  useEffect(() => {
    console.log(current, "current");
  }, [current]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    const res = await deleteContact(token, id);
    console.log(res);
    window.location.reload();
  };

  const handleUpdate = async (id) => {
    const data = new FormData();
    data.append("name", name1);
    data.append("email", email1);
    data.append("phone", phone1);
    data.append("picture", current);

    const token = localStorage.getItem("token");
    const res = await updateContact(token, id, data);
    if (res._id) {
      window.location.reload();
    } else {
      alert("Error in updating the contact");
    }
    console.log(res);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setCurrent(file);
      setCpreview(URL.createObjectURL(file)); // Create preview URL
    } else {
      setCurrent(null);
      setCpreview(null); // Reset preview if not an image
    }
  };

  return (
    <div className=" w-full flex items-center justify-start py-6 border-b-[1px] px-8 border-gray-500 text-white  ">
      <div className=" w-[20%] flex gap-6 items-center  ">
        <div className=" text-[20px] leading-none ">{sno}</div>{" "}
        {!picture || picture === "null" ? (
          <Profile stroke={"#FFFFFF"} />
        ) : (
          <div className="h-[50px] w-[50px] rounded-full">
            <Image
              height={100}
              width={100}
              className="object-cover h-full w-full"
              src={`${BACKEND_URL}/uploads/${picture}`}
            />
          </div>
        )}
      </div>
      <div className=" w-[20%] flex items-center  ">
        <div>{name}</div>
      </div>
      <div className=" w-[24%] flex items-center  ">
        <div>{email}</div>
      </div>
      <div className=" w-[20%] flex items-center   ">
        <div>{phone}</div>
      </div>

      <Dialog>
        <DialogTrigger>
          {" "}
          <div className=" w-fit px-2 bg-white rounded-3xl text-black font-medium  py-2 flex items-center justify-center cursor-pointer  ">
            View Details
          </div>
        </DialogTrigger>
        <DialogContent className="bg-black">
          <DialogHeader>
            <DialogTitle>
              <div className="flex items-center ">
                {!picture || picture === "null" ? (
                  <Profile stroke={"#FFFFFF"} />
                ) : (
                  <div className="h-[50px] w-[50px] rounded-full">
                    <Image
                      height={100}
                      width={100}
                      className="object-cover h-full w-full"
                      src={`${BACKEND_URL}/uploads/${picture}`}
                    />
                  </div>
                )}
                <div className=" text-white font-semibold italic text-[20px]    ">
                  {name}
                </div>
              </div>
            </DialogTitle>
            <DialogDescription>
              <div>
                <div className=" flex flex-col gap-12 py-12  ">
                  <div className=" flex text-white font-semibold text-[24px]  ">
                    {" "}
                    Email: {email}{" "}
                  </div>
                  <div className=" flex text-white font-semibold text-[24px]  ">
                    {" "}
                    Phone: {phone}{" "}
                  </div>
                  <div className=" flex text-white font-semibold text-[24px]  ">
                    {" "}
                    Created At: {formatDate(date)}{" "}
                  </div>
                </div>
                <div className=" flex gap-4 w-full ">
                  <div
                    className=" bg-white flex items-center gap-2 text-red-500 font-semibold py-3 px-4 rounded-3xl cursor-pointer  "
                    onClick={() => {
                      handleDelete(id);
                    }}
                  >
                    <Delete height={20} />
                    <div> Delete</div>
                  </div>
                  {/* <DialogClose asChild>
                    <div className=" bg-white flex items-center gap-2 text-black font-semibold py-3 px-4 rounded-3xl cursor-pointer  ">
                      <Edit />
                      <div> Edit</div>
                    </div>
                  </DialogClose> */}
                  <Dialog>
                    <DialogTrigger>
                      <div className=" bg-white flex items-center gap-2 text-black font-semibold py-3 px-4 rounded-3xl cursor-pointer  ">
                        <Edit />
                        <div> Edit</div>
                      </div>
                    </DialogTrigger>

                    <DialogContent className="bg-black">
                      <DialogHeader>
                        <DialogTitle>
                          <div className=" text-white font-semibold text-[42px] ">
                            Edit Contact
                          </div>
                        </DialogTitle>
                        <DialogDescription>
                          <div className="  flex flex-col gap-8 py-6 ">
                            <div className=" flex items-start gap-3 ">
                              {isPic && picture ? (
                                <div className=" h-[100px] w-[100px] rounded-full ">
                                  <Image
                                    height={100}
                                    width={100}
                                    className=" object-cover h-full w-full "
                                    src={cpreview}
                                  />
                                </div>
                              ) : (
                                <Profile stroke={"#FFFFFF"} />
                              )}
                              <div className=" flex flex-col gap-6 ">
                                <div
                                  className=" text-white cursor-pointer text-[24px]  "
                                  onClick={handleDivClick}
                                >
                                  New Photo
                                </div>
                                <input
                                  ref={fileInputRef}
                                  className=" hidden w-[400px] outline-none px-2 placeholder:text-[#9D9D9D] text-[16px] border-b-[1px] border-[#9D9D9D] py-2  "
                                  placeholder="Uploadfile"
                                  type="file"
                                  accept="image/*"
                                  onChange={handleImageChange}
                                />
                                {picture && (
                                  <div
                                    className=" text-white cursor-pointer text-[24px]  "
                                    onClick={() => {
                                      setCurrent("");
                                      setCpreview(null);
                                      setIsPic(false);
                                    }}
                                  >
                                    Delete Photo
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className=" flex flex-col gap-3 ">
                              <div className=" text-white font-semibold text-[24px]  ">
                                Name
                              </div>

                              <input
                                className=" w-full outline-blue-600 px-4 py-2 rounded-3xl text-black font-semibold text-[20px] "
                                value={name1}
                                onChange={(e) => {
                                  setName(e.target.value);
                                }}
                              />
                            </div>
                            <div className=" flex flex-col gap-3 ">
                              <div className=" text-white font-semibold text-[24px]  ">
                                E-mail
                              </div>
                              <input
                                className=" w-full outline-blue-600 px-4 py-2 rounded-3xl text-black font-semibold text-[20px] "
                                value={email1}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              />
                            </div>
                            <div className=" flex flex-col gap-3 ">
                              <div className=" text-white font-semibold text-[24px]  ">
                                Phone
                              </div>
                              <input
                                className=" w-full outline-blue-600 px-4 py-2 rounded-3xl text-black font-semibold text-[20px] "
                                value={phone1}
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                }}
                              />
                            </div>
                            <div className=" w-full flex items-center justify-end ">
                              <div
                                className=" text-white font-bold py-2 px-6 rounded-3xl cursor-pointer hover:text-blue-400 hover:bg-white duration-200 bg-blue-400 w-fit   "
                                onClick={() => {
                                  handleUpdate(id);
                                }}
                              >
                                Update
                              </div>
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactCard;
