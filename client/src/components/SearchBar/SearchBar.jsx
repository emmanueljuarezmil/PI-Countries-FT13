import "./SearchBar.css";
import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <Desktop />
      <Mobile />
    </div>
  );
};

export default SearchBar;
