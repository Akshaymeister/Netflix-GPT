import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constants/constants";

const GptSearch = () => {
  return (
    <div>
      <img className=" -z-50 absolute w-full  blur-[5px]" src={BG_IMG} alt="" />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
