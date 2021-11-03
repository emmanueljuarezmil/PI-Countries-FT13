import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import Carousel from "../Carousel/Carousel";
import "./ActivityCard.css";

const ActivityCard = ({ activity, mini }) => {
  const { name, description, difficult, duration, countries } = activity;

  const difficults = [
    "Muy fácil",
    "Fácil",
    "Intermedia",
    "Dificil",
    "Muy dificil",
  ];

  const carouselCountriesItems = !mini
    ? countries.map((country) => (
        <div className="countrycard-carouselactivity">
          <CountryCard country={country} key={country.id} />
        </div>
      ))
    : null;

  return (
    <div className="activitycard-container">
      <h3>{name}</h3>
      <p>
        Dificultad: {difficults[difficult - 1]}.{" "}
        {duration ? `Duración aproximada: ${duration} minutos` : null}
      </p>
      {!mini ? <p className="activitycard-description">{description}</p> : null}
      {!mini ? (
        <div className="activitycard-carousel-container">
          <span>Se puede realizar en: </span>
          <div className="activitycard-carousel-carousel">
            <Carousel items={carouselCountriesItems} n={2} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ActivityCard;
