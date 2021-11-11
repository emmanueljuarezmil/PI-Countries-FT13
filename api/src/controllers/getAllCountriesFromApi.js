const { Country } = require("../db");
const axios = require("axios");
require('dotenv').config();

const getAllCountriesFromApi = async () => {
  try {
    const { data } = await axios.get(process.env.EXTERNAL_API_URL);
    for (let country of data) {
      await Country.create({
        id: country.cca3,
        name: country.name.common,
        flag: country.flags[1],
        continent: country.region !== "" ? country.region : "Otros",
        capital: country.capital ? country.capital[0] : "No especificada",
        subregion: country.subregion,
        area: country.area ? country.area : 0,
        poblation: country.population,
        lat: country.latlng[0],
        lng: country.latlng[1],
      });
    }
    console.log("Paises precargados en la base de datos");
  } catch (err) {
    console.error(err);
  }
};

module.exports = getAllCountriesFromApi;
