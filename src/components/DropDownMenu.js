import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";

const DropDownMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="dropdown flex flex-col justify-center items-center absolute top-[5.5rem] right-[5.8rem] w-28 p-4  rounded-md bg-black bg-opacity-80 text-white border border-white border-opacity-20">
      <ul className="flex flex-col gap-2 text-sm justify-center items-center ">
        <li className="cursor-pointer ">Profile</li>
        <li className="cursor-pointer">
          {showGptSearch && (
            <select
              onChange={handleLangChange}
              name="Lang"
              id=""
              className="bg-black bg-opacity-0 "
            >
              <option value="en">English</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
            </select>
          )}
        </li>
        <li onClick={handleSignout} className="cursor-pointer">
          Sign Out
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
