import "./CountryCardsContainer.css";
import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import SearchFailed from "../SearchFailed/SearchFailed";
import { useSelector } from "react-redux";

const CountryCardsContainer = () => {
  const countries = useSelector((state) => state.countries);
  return countries && countries.length ? (
    <div className="countrycards-container">
      {countries.map((country) => (
        <CountryCard country={country} key={country.id} />
      ))}
    </div>
  ) : (
    <SearchFailed />
  );
};

export default CountryCardsContainer;
