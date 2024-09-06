import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const DropDownMenu = () => {
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="dropdown flex flex-col justify-center items-center absolute top-[5.5rem] right-12 w-28 p-4  rounded-md bg-gray-900 text-white border border-gray-600">
      <ul className="flex flex-col gap-4 text-sm ">
        <li className="cursor-pointer">Profile</li>
        <li className="cursor-pointer">Settings</li>
        <li onClick={handleSignout} className="cursor-pointer">
          Sign Out
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
