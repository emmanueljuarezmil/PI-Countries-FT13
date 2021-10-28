const { Country, Activity } = require('../db')
const { Op } = require('sequelize')

const exclude = ['createdAt', 'updatedAt']

const getCountries = async (req,res,next) => {
    let {
        name,
        orderBy = 'name',
        orderType = 'ASC',
        page = 1,
        itemsPerPage = 9,
        activityFilter = '',
        continentFilter = ''
    } = req.query

    name = name !== 'undefined' && name !== '' ? name : ''
    orderBy = orderBy !== 'undefined' && orderBy !== '' ? orderBy : 'name'
    orderType = orderType !== 'undefined' && orderType !== '' ? orderType : 'ASC'
    page = page !== 'undefined' ? parseInt(page) : 1
    itemsPerPage = itemsPerPage !== 'undefined' ? parseInt(itemsPerPage) : 9
    activityFilter = activityFilter !== 'undefined' && activityFilter !== '' ? activityFilter : ''
    continentFilter = continentFilter !== 'undefined' && continentFilter !== '' ? continentFilter : ''

    if((orderBy !== 'name' && orderBy !== 'poblation' && orderBy !== 'area') || (orderType !== 'ASC' && orderType !== 'DESC')) {
        return next({
            status: 400, 
            message: 'Los parametros enviados son incorrectos'
        })
    }

    
    try {
        const where = {}
        name ? where.name = {[Op.iLike]: `%${name}%`} : null
        continentFilter !== '' ? where.continent = continentFilter : null

        const queryConfig = {
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
            order: [[orderBy, orderType]]
        }
        const totalItems = await Country.findAll(queryConfig)
        const totalPages = Math.ceil(Object.values(totalItems).length / itemsPerPage)

        queryConfig.offset = (page - 1) * itemsPerPage
        queryConfig.limit = itemsPerPage

        const countries = await Country.findAll(queryConfig)

        const countriesContinents = await Country.findAll({
            attributes: ['continent']
        })
        
        const continents = [...new Set(countriesContinents.map(country => country.continent))]
        
        return res.send({
            countries,
            totalPages,
            continents
        })
    } catch(err) {
        return next(err)
    }
}

module.exports = getCountries