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
        <div className="countrycard-carouselactivity" key={country.id}>
          <CountryCard country={country} />
        </div>
      ))
    : null;

  return (
    <div className={`activitycard-container ${mini ? 'activitycard-container-mini' : null}`}>
      {!mini ? 
      <h3>{name}</h3>
      : <span className="activitycard-tittle-mini">
        {/* {name.length > 18 ?
        `${name.slice(0, 18)}...` :
        name
        } */}
        {name}
      </span>
    }
      {
        !mini ?
        <p className="activitycard-difficult-duration">
          Dificultad: {difficults[difficult - 1]}.{" "}
          {duration ? `Duración: ${duration} minutos` : null}
        </p> :
        <p className="activitycard-difficult-duration">
        {difficults[difficult - 1]}.{" "}
        {duration ? `${duration} minutos` : null}
      </p>
      }
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
