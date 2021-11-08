import "./CountryCard.css";
import React from "react";
import { useDispatch } from "react-redux";
import { getCountryDetail } from "../../actions";
import { Link } from "react-router-dom";

const CountryCard = ({ country, mini }) => {
  const { name, id, flag } = country;
  const dispatch = useDispatch();
  return (
    <div
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`country-card-container ${mini ? 'country-card-container-mini' : null}`}
    >
      <Link onClick={() => dispatch(getCountryDetail(id))} to="/countryDetail" className="button">
        <span className="country-card-name">{
          mini ?
          name.length > 15 ?
          `${name.slice(0, 15)}...` :
          name :
          name
        }</span>
      </Link>
    </div>
  );
};

export default CountryCard;
