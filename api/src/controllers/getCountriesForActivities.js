const { Country } = require('../db')

const getCountriesForActivities = async (req,res,next) => {
    
    try {
        const countries = await Country.findAll({
            attributes: ['name', 'id'],
            order: [['name', 'ASC']]
        })
        return res.send(countries)
    } catch(err) {
        return next(err)
    }
}

module.exports = getCountriesForActivities