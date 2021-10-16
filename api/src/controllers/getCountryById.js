const { Country, Activity } = require('../db')
const { Op } = require("sequelize")

const exclude = ['createdAt', 'updatedAt']

const getCountryById = async (req,res,next) => {
    const { id } = req.params
    try {
        const country = await Country.findOne({
            where: { id },
            include: {
                model: Activity,
                attributes: {
                    exclude
                },
                through: {
                  attributes: []
                },
                include: {
                    model: Country,
                    attributes: ['name', 'id', 'flag'],
                    through: {
                        attributes: []
                    }
                }
            },
            attributes: {
                exclude
            }
        })
        if(country){
            let nearbyCountries = []
            let latAndLngDifference = 3
            while (nearbyCountries.length < 6) {
                nearbyCountries = await Country.findAll({
                    where: {
                        lat: {
                            [Op.between]: [parseInt(country.lat) - latAndLngDifference, parseInt(country.lat) + latAndLngDifference]
                        },
                        lng: {
                            [Op.between]: [parseInt(country.lng) - latAndLngDifference, parseInt(country.lng) + latAndLngDifference]
                        }
                    }
                })
                latAndLngDifference += 2
            }
            nearbyCountries = nearbyCountries.filter(nearbyCountry => nearbyCountry.name !== country.name)
            return res.send({
                country,
                nearbyCountries
            })
        }
        return next({
            status: 404,
            message: 'No se encontró ningún pais con el id indicado'
        })
    }
    catch(err){
        return next(err)
    }
}

module.exports = getCountryById