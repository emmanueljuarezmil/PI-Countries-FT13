import "./CountryDetail.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ActivityCard from "../ActivityCard/ActivityCard";
import CountryCard from "../CountryCard/CountryCard";
import Carousel from "../Carousel/Carousel";

const CountryDetail = () => {
  const {
    name,
    flag,
    continent,
    capital,
    subregion,
    area,
    poblation,
    lat,
    lng,
    activities = [],
    nearbyCountries = [],
  } = useSelector((state) => state.countryDetail);

  const carouselActivityItems = activities.map((activity) => (
    <ActivityCard activity={activity} mini={true} key={activity.id} />
  ));

  const carouselNearbyCountriesItems = nearbyCountries.map((country) => (
    <CountryCard country={country} key={country.id} />
  ));

  const roundAndFix = (number, string) => {
    return number >= 1000
      ? number >= 1000000
        ? `${(number / 1000000).toFixed(2)} millones de ${string}`
        : `${(number / 1000).toFixed(2)} miles de ${string}`
      : `${number} ${string}`;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2>{name}</h2>
      <div>
        <div>
          <span>Capital: {capital}</span>
          <span>Poblacion: {roundAndFix(poblation, "habitantes")}</span>
          <span>Superficie: {roundAndFix(area, "kilómetros cuadrados")}</span>
        </div>
        <div>
          <span>Continente: {continent}</span>
          <span>Subregion: {subregion}</span>
          <span>
            Coordenadas: {lat}, {lng}
          </span>
        </div>
      </div>
      <a
        href={`https://www.google.com.ar/maps/@${lat},${lng},6z`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver en Google Maps
      </a>
      <div>
        <Carousel items={carouselActivityItems} n={2} />
      </div>
      <div>
        <h3>Paises cercanos a {name} que pueden interesarte:</h3>
        <Carousel items={carouselNearbyCountriesItems} n={2} />
      </div>
      <Link to="/home">Regresar al home</Link>
    </div>
  );
};

export default CountryDetail;
