import "./CountryDetail.css";
import React from "react";
import { useSelector } from "react-redux";
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
    <CountryCard country={country} key={country.id} mini={true}/>
  ));

  const roundAndFix = (number, string) => {
    return number >= 1000
      ? number >= 1000000
        ? `${(number / 1000000).toFixed(2)} millones de ${string}`
        : `${(number / 1000).toFixed(2)} miles de ${string}`
      : `${number} ${string}`;
  };

  return (
    <div className="countrydetail-container">
      <div className="countrydetail-card">
        <div className="countrydetail-card-column">
          <h2>{name}</h2>
          <span>Capital {capital}</span>
          <span>Poblacion {roundAndFix(poblation, "habitantes")}</span>
          <span>Superficie {roundAndFix(area, "kilómetros cuadrados")}</span>
          <span>Continente {continent}</span>
          <span>Subregion {subregion}</span>
          <span>
            Coordenadas {parseFloat(lat).toFixed(2)}, {parseFloat(lng).toFixed(2)}
          </span>
          <a
            href={`https://www.google.com.ar/maps/@${lat},${lng},6z`}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Ver en Google Maps
          </a>
        </div>
        <div className="countrydetail-card-column">
          <div className="countrydetail-card-column-flag">
            <img src={flag} alt="Bandera del pais seleccionado" />
          </div>
          <span id="countrydetail-card-column-span">{`Paises cercanos a ${name}${
            activities.length ? " y sus actividades" : ""
          }`}</span>
          <div className="countrydetail-card-column-carousel-container">
            <Carousel items={carouselNearbyCountriesItems} n={2} />
          </div>
          {activities.length ? (
            <div className="countrydetail-card-column-carousel-container">
              <Carousel items={carouselActivityItems} n={2} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
