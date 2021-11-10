import React from "react";
import "./SearchFailed.css";
import globe from "../../img/globe.png";

const SearchFailed = () => {
  return (
    <div className="searchfailed-container">
      <h3>Tu busqueda no obtuvo resultados, intenta de otra forma</h3>
      <img src={globe} alt="Imagen de globo terraqueo" />
    </div>
  );
};

export default SearchFailed;
