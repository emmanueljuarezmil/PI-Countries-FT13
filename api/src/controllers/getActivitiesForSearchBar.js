const { Activity } = require("../db");

const getActivitesForSearchBar = async (req, res, next) => {
  try {
    const activities = await Activity.findAll({
      attributes: ["name", "id"],
    });
    return res.send(activities);
  } catch (err) {
    return next(err);
  }
};

module.exports = getActivitesForSearchBar;
