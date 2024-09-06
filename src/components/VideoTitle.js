import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/16/solid";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex gap-4">
        <button className="rounded-lg bg-white  text-black py-3 px-12 text-xl flex justify-center items-center gap-2 bg-opacity-90 hover:bg-opacity-10 hover:text-white ">
          <PlayIcon className="w-9" />
          Play
        </button>
        <button className="rounded-lg bg-gray-500  text-white py-3 px-12 text-xl flex justify-center items-center gap-2 bg-opacity-30 hover:bg-opacity-90 hover:bg-white hover:text-black">
          <InformationCircleIcon className="w-9" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
