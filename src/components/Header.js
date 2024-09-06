import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const user = useSelector((store) => store.user);

  return (
    <div className="flex justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 ">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      {user && (
        <div className="flex p-4 gap-4">
          <img
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className="w-12 h-12 rounded-md cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avataricon"
          />
        </div>
      )}
      {openMenu && <DropDownMenu />}
    </div>
  );
};

export default Header;
