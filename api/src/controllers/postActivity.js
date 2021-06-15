const validateActivity = require('./validateActivity')
const {Country, Activity} = require('../db')

module.exports = async function (req,res,next) {
    var {name, difficult, duration, season, description, countriesIds} = req.body
    if(!season) season = null
    if(!description) description = null
    if(!duration) duration = null
    if(!difficult) difficult = null
    if(validateActivity(name, difficult, duration, season, countriesIds)) {
        return res.status(400).send('Datos incorrectos')
    }
    var activity
    try {
        activity = await Activity.create({name, difficult, duration, season, description})
        await activity.setCountries(countriesIds)
    }
    catch(err) {
        console.error(err)
        activity.destroy()
        return res.status(400).send('Datos incorrectos')
    }
    return res.json(activity)
}