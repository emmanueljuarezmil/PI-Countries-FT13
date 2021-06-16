const {Country, Activity} = require('../db')

module.exports = async function (req,res,next) {
    const {id} = req.params
    try {
        const country = await Country.findAll({
            where: {id},
            include: {
                model: Activity,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                through: {
                  attributes: []
                }
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
        if(country.length){
            return res.json(country)
        }
        next({status: 404, message: 'No se encontró ningún pais con el id indicado'})
    }
    catch(err){
        next(err)
    }
}