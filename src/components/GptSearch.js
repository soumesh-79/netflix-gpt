import React from "react";
import GptSearchBars from "./GptSearchBars";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Background } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={Background} alt="Background" />
      </div>
      <GptSearchBars />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
