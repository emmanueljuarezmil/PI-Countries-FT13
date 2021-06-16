const {Country, Activity} = require('../db')
const { Op } = require('sequelize')

module.exports = async function (req,res,next) {
    var {name} = req.query
    var {orderBy = 'name', orderType = 'ASC'} = req.body

    if(name) name = decodeURI(name)

    if((orderBy !== 'name' && orderBy !== 'poblation') || (orderType !== 'ASC' && orderType !== 'DESC')) {
        // return res.status(400).send('Los parametros enviados son incorrectos, no te hagas el piola')
        next({status: 400, message: 'Los parametros enviados son incorrectos'})
    }

    try {
        const countries = await Country.findAll({
            include: {
                model: Activity,
                attributes: ['id'],
                through: {
                    attributes: []
                }
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'capital', 'subregion', 'area']
            },
            order: [[orderBy, orderType]],
            where: name ? {name: {[Op.iLike]: `%${name}%`}} : null
        })


        if(countries.length) {
            return res.json(countries)
        }
        else {
            next({status: 404, message: 'No se encontró ningún pais con el nombre indicado'})
        }
    } catch(err) {
        next(err)
    }

}