const { Activity } = require('../db')

const exclude = ['createdAt', 'updatedAt']

const getActivites = async (req, res, next) => {
    try {
        const activities = await Activity.findAll({
            attributes: {
                exclude
            }
        })
        return res.send(activities)
    } catch(err) {
        return next(err)
    }
}

module.exports = getActivites