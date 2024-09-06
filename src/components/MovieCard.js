import React from "react";
import { IMG_CDN_URL } from "../utils/constants/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48">
      <img className="rounded-lg" src={IMG_CDN_URL + posterPath} alt="Movie" />
    </div>
  );
};

export default MovieCard;
