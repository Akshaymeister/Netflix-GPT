import React, { useEffect, useState } from "react";
import DropDownMenu from "./DropDownMenu";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO, USER_AVATAR } from "../utils/constants/constants";

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

  return (
    <div className="flex justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 ">
      <img className="w-44 " src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex p-4 gap-4">
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
