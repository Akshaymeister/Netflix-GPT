import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div className="w-full p-8 bg-black text-white flex justify-center">
      <h1 className="flex gap-2">
        Made with <HeartIcon className="fill-red-500 w-6" /> by{" "}
        <a className="text-red-500" href="https://github.com/Akshaymeister">
          Akshay Nigam
        </a>
      </h1>
    </div>
  );
};

export default Footer;
