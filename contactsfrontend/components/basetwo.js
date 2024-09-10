"use client";
import getAllContacts from "@/api/getAllContacts";
import React, { useEffect, useState } from "react";
import ContactCard from "./contactCard";

const Basetwo = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getContacts = async () => {
      const token = localStorage.getItem("token");
      const res = await getAllContacts(token);
      setData(res);
      console.log(res, "all contacts");
    };
    getContacts();
  }, []);
  return (
    <div className=" w-full h-full  bg-black rounded-3xl relative overflow-hidden overflow-y-scroll ">
      <div className=" bg-black rounded-b-3xl w-full p-6 sticky top-0 left-0 ">
        <div className=" text-white font-semibold text-[36px] pb-6 ">
          All <span className=" text-blue-400 italic "> Contacts </span>{" "}
        </div>
        <div className=" w-full flex items-center bg-gray-700 px-2 py-2 rounded-3xl   text-white  ">
          <div className=" w-[20%]  ">Sno.</div>
          <div className=" w-[20%]  ">Name</div>
          <div className=" w-[24%]  ">Email</div>
          <div className=" w-[20%]   ">Phone</div>
        </div>
      </div>
      {data?.map((item, index) => (
        <ContactCard
          id={item._id}
          sno={index + 1}
          name={item.name}
          email={item.email}
          phone={item.phone}
          date={item.createdAt}
        />
      ))}
    </div>
  );
};

export default Basetwo;
