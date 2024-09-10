import AddContact from "@/api/addContact";
import React, { useState } from "react";

const Baseone = () => {
  const token = localStorage.getItem("token");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  const handleAdd = async () => {
    const res = await AddContact(token, data);
    if (res.user_id) {
      alert(`${res.name} has been added to your contact list `);
      window.location.reload();
    } else {
      alert("Error in adding new member");
    }
    console.log(res);
  };

  return (
    <div className=" h-full w-full flex flex-col justify-between p-6 ">
      <div className=" text-white font-semibold text-[24px] ">
        Add a new <span className=" text-blue-400 italic "> Contact</span>
      </div>
      <input
        className=" w-full outline-blue-600 px-4 py-2 rounded-3xl "
        placeholder="Enter Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className=" w-full outline-blue-600 px-4 py-2 rounded-3xl "
        placeholder="Enter E-Mail"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className=" w-full outline-blue-600 px-4 py-2 rounded-3xl "
        placeholder="Enter Phone No."
        value={phone}
        type="number"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <div className=" w-full items-center flex justify-end ">
        <div
          className=" text-white font-bold py-2 px-6 rounded-3xl cursor-pointer hover:text-blue-400 hover:bg-white duration-200 bg-blue-400 w-fit   "
          onClick={() => {
            if (!name || !email || !phone) {
              alert("Enter all the details");
            } else {
              handleAdd();
            }
          }}
        >
          Add
        </div>
      </div>
    </div>
  );
};

export default Baseone;
