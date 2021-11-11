const { Country, Activity } = require("../db");
const { v4: uuidv4 } = require("uuid");
const activities = require("../../data/activities.json");

const chargeInitialActivities = async (req, res, next) => {
  try {
    const countries = await Country.findAll();
    for (let activity of activities) {
      const {
        name = null,
        difficult = null,
        duration = null,
        season = null,
        description = null,
      } = activity;
      const id = uuidv4();
      const activityCreated = await Activity.create({
        id,
        name,
        difficult,
        season,
        description,
        duration,
      });
      const countriesToAdd = [];
      for (let i = 0; i <= 15; i++) {
        countriesToAdd.push(
          countries[Math.floor(Math.random() * countries.length)].dataValues.id
        );
      }
      const countriesToAddRemovedDuplicated = [...new Set(countriesToAdd)];
      await activityCreated.setCountries(countriesToAddRemovedDuplicated);
    }
    return res.send("Actividades precargadas en la base de datos");
  } catch (err) {
    console.error(err);
  }
};

module.exports = chargeInitialActivities;
