const validateActivity = require('./validateActivity')
const {Country, Activity} = require('../db')
const { Op } = require("sequelize");

module.exports = async function (req,res,next) {
    var {name, difficult, duration, season, description, countriesIds} = req.body
    console.log(req.body)
    if(!season) season = null
    if(!description) description = null
    if(!duration) duration = null
    if(!difficult) difficult = null
    if(validateActivity(name, difficult, duration, season, countriesIds)) {
        next({status: 400, message: 'Los parametros enviados son incorrectos'})
    }
    try {
        const activity = await Activity.create({name, difficult, duration, season, description})
        await activity.setCountries(countriesIds)
        const activitySend = await Activity.findOne({
            where: {
                id: activity.dataValues.id
            },
            include: {
                model: Country,
                attributes: ['id'],
                through: {
                  attributes: []
                }
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
        return res.json(activitySend)
    }
    catch(err) {
        next(err)
    }
}