const { Router } = require("express");
const {
  getCountries,
  getCountryById,
  postActivity,
  getActivites,
  getCountriesForActivities,
  getActivitesForSearchBar,
  getAllCountriesFromApi,
  chargeInitialActivities
} = require("../controllers");

const router = Router();

router.get("/countries", getCountries);
router.get("/countriesForActivities", getCountriesForActivities);
router.get("/countries/:id", getCountryById);
router.get("/chargecountries", getAllCountriesFromApi)

router.get("/activity", getActivites);
router.get("/activitySearchBar", getActivitesForSearchBar);
router.post("/activity", postActivity);
router.get("/chargeactivities", chargeInitialActivities)

module.exports = router;
