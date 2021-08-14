const { Activity, Country } = require('../db')

const exclude = ['createdAt', 'updatedAt']

const getActivites = async (req, res, next) => {
    try {
        const activities = await Activity.findAll({
            attributes: {
                exclude
            },
            include: {
                model: Country,
                attributes: ['name', 'id', 'flag'],
                through: {
                    attributes: []
                }
            }
        })
        return res.send(activities)
    } catch(err) {
        return next(err)
    }
}

module.exports = getActivites