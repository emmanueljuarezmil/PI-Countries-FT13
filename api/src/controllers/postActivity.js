const {Country, Activity} = require('../db')
const { v4: uuidv4 } = require('uuid')
const exclude = ['createdAt', 'updatedAt']

const validateActivity = (name, difficult, duration, season, countries) => {
    const seasons = ['Verano', 'Otoño', 'Primavera', 'Invierno']
    if(!name || typeof name !== 'string') return true
    if(difficult && (typeof difficult !== 'number' || difficult < 1 || difficult > 5)) return true
    if(duration && (typeof duration !== 'number' || duration < 0)) return true
    if(season && !seasons.includes(season)) return true
    if(!Array.isArray(countries) || countries.length === 0) return true
    return false
}

const validateCountries = async (countries) => {
    for(let country of countries) {
        try {
            const verifyCountry = await Country.findByPk(country)
            if (!verifyCountry) return true
        } catch(err) {
            console.error(err)
        }
    }
    return false
}

const postActivity = async (req,res,next) => {
    const { name = null, difficult = null, duration = null, season, description = null, countries } = req.body

    if( validateActivity(name, difficult, duration, season, countries) ) {
        return next({
            status: 400,
            message: 'Los parametros enviados son incorrectos'
        })
    }

    if( await validateCountries(countries) ) {
        return next({
            status: 400,
            message: 'Algun id de los paises enviados es incorrecto'
        })
    }

    try {
        const id = uuidv4()
        const activity = await Activity.create({
            id,
            name,
            difficult,
            duration,
            season,
            description})
        await activity.setCountries(countries)
        
        const activitySend = await Activity.findOne({
            where: {
                id: activity.id
            },
            include: {
                model: Country,
                through: {
                  attributes: []
                }
            },
            attributes: {
                exclude
            }
        })
        return res.send(activitySend)
    }
    catch(err) {
        return next(err)
    }
}

module.exports = postActivity