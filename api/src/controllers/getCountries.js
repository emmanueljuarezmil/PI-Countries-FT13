const { Country, Activity } = require('../db')
const { Op } = require('sequelize')

const exclude = ['createdAt', 'updatedAt']

const getCountries = async (req,res,next) => {
    let {
        name,
        orderBy = 'name',
        orderType = 'ASC',
        page = 1,
        itemsPerPage = 10,
        activityFilter = '',
        continentFilter = ''
    } = req.query

    name = name !== 'undefined' ? name : ''
    orderBy = orderBy !== 'undefined' ? orderBy : 'name'
    orderType = orderType !== 'undefined' ? orderType : 'ASC'
    page = page !== 'undefined' ? parseInt(page) : 1
    itemsPerPage = itemsPerPage !== 'undefined' ? parseInt(itemsPerPage) : 10
    activityFilter = activityFilter !== 'undefined' ? activityFilter : ''
    continentFilter = continentFilter !== 'undefined' ? continentFilter : ''

    if((orderBy !== 'name' && orderBy !== 'poblation' && orderBy !== 'area') || (orderType !== 'ASC' && orderType !== 'DESC')) {
        return next({
            status: 400, 
            message: 'Los parametros enviados son incorrectos'
        })
    }

    const where = {}
    name ? where.name = {[Op.iLike]: `%${name}%`} : null
    continentFilter !== '' ? where.continent = continentFilter : null

    try {
        const queryConfig = {
            // where: name ? {
            //     name: {[Op.iLike]: `%${name}%`}
            // } : 
            // null,
            where,
            include: {
                model: Activity,
                where: activityFilter !== '' ? {
                    id: activityFilter
                } : 
                null,
                through: {
                    attributes: []
                },
                attributes: {
                    exclude
                },
            },
            attributes: {
                exclude: [...exclude, 'capital', 'subregion']
            },
            order: [[orderBy, orderType]],
            offset: (page - 1) * itemsPerPage,
            limit: itemsPerPage
        }
        const countries = await Country.findAndCountAll(queryConfig)

        const countriesContinents = await Country.findAll({
            attributes: ['continent']
        })
        
        const continents = [...new Set(countriesContinents.map(country => country.continent))]
        
        return res.send({
            countries: countries.rows,
            totalPages: Math.ceil(countries.count / itemsPerPage),
            continents
        })
    } catch(err) {
        return next(err)
    }
}

module.exports = getCountries