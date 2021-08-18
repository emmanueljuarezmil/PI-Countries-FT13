const {Country, Activity} = require('../db')

const exclude = ['createdAt', 'updatedAt']

const getCountryById = async (req,res,next) => {
    const { id } = req.params
    try {
        const country = await Country.findOne({
            where: {id},
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
            return res.send(country)
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