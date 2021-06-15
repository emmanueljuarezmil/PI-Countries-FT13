const {Country, Activity} = require('../db')
const { Op } = require('sequelize')

module.exports = async function (req,res,next) {
    var {name, page = 1} = req.query
    var {filterOnFront = false, orderBy = 'name', orderType = 'ASC'} = req.body

    if(name) name = decodeURI(name)

    if((orderBy !== 'name' && orderBy !== 'poblation') || (orderType !== 'ASC' && orderType !== 'DESC') || isNaN(page)) {
        return res.status(400).send('Los parametros enviados son incorrectos, no te hagas el piola')
    }

    var countries

    try {
        if(name) {
            countries = await Country.findAll({
                where: {name: {[Op.iLike]: `%${name}%`}},
                include: {
                    model: Activity,
                    attributes: ['id', 'name'],
                    through: {
                    attributes: []
                    }
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'capital', 'subregion', 'area']
                },
                offset: filterOnFront ? null : (page - 1)*10,
                limit: filterOnFront ? null : 10,
                order: [[orderBy, orderType]]
            })
        }
        else {
            countries = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: ['id', 'name'],
                    through: {
                    attributes: []
                    }
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'capital', 'subregion', 'area']
                },
                offset: filterOnFront ? null : (page - 1)*10,
                limit: filterOnFront ? null : 10,
                order: [[orderBy, orderType]]
            })
        }

        if(countries.length) {
            return res.json(countries)
        }
        else {
            return res.status(204).send('No hay paises para mostrar')
        }
    } catch(err) {
        console.error(err)
        return res.status(400).send('Se pudrió todo amigo, algo pasó')
    }

}