import React from "react";
import lang from "../utils/constants/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%]  flex justify-center">
      <form className="rounded-lg w-8/12  py-10 bg-black bg-opacity-80 flex justify-center gap-5">
        <input
          type="text"
          className="p-4 w-9/12 placeholder:text-xl text-lg rounded-lg outline-none focus-within:border-white focus-within:outline-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-3 px-8 text-lg  bg-red-700 font-bold text-white rounded-lg hover:bg-red-800">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
