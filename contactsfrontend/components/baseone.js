import AddContact from "@/api/addContact";
import React, { useRef, useState } from "react";

const Baseone = () => {
  const token = localStorage.getItem("token");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [picture, setpicture] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef(null); // Create a ref for the input

  // Function to handle div click
  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the input click when div is clicked
    }
  };

  // const data = {
  //   name: name,
  //   email: email,
  //   phone: phone,
  // };

  const data = new FormData();
  data.append("name", name);
  data.append("email", email);
  data.append("phone", phone);
  data.append("picture", picture);

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
    <div className=" h-full w-full flex flex-col justify-between p-6 ">
      <div className=" text-white font-semibold text-[24px] ">
        Add a new <span className=" text-blue-400 italic "> Contact</span>
      </div>
      <div className=" w-full flex gap-2 items-center ">
        <div className=" w-[40%] ">
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
          <div className=" text-white cursor-auto " onClick={handleDivClick}>
            Click here
          </div>
          <input
            ref={fileInputRef}
            className=" hidden w-[400px] outline-none px-2 placeholder:text-[#9D9D9D] text-[16px] border-b-[1px] border-[#9D9D9D] py-2  "
            placeholder="Uploadfile"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className=" w-[60%] flex flex-col gap-5 ">
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
        </div>
      </div>
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
