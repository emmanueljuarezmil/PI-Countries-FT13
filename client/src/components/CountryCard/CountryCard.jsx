import "./CountryCard.css";
import React from "react";
import { useDispatch } from "react-redux";
import { getCountryDetail } from "../../actions";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { name, id, flag } = country;
  const dispatch = useDispatch();
  return (
    <div
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="country-card-container"
    >
      <Link onClick={() => dispatch(getCountryDetail(id))} to="/countryDetail" className="button">
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default CountryCard;
