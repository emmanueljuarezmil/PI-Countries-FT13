const {Country, Activity} = require('../db')

module.exports = async function (req,res,next) {
    const {id} = req.params
    try {
        var country = await Country.findAll({
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
        return res.status(204).send('No se encontro el pais :(')
    }
    catch(err){
        console.error(err)
        return res.status(400).send('Algo malió sal')
    }
}