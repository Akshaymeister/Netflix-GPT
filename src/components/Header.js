import React, { useEffect, useState } from "react";
import DropDownMenu from "./DropDownMenu";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO, USER_AVATAR } from "../utils/constants/constants";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="flex justify-between w-full absolute px-20 py-2 bg-gradient-to-b from-black z-10 ">
      <img className="w-44 " src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex p-4 gap-6 justify-center items-center">
          <MagnifyingGlassIcon
            onClick={handleGptSearch}
            className="w-10 fill-white cursor-pointer"
          />
          <img
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className="w-12 h-12 rounded-md cursor-pointer"
            src={USER_AVATAR}
            alt="avataricon"
          />
        </div>
      )}
      {openMenu && <DropDownMenu />}
    </div>
  );
};

export default Header;
