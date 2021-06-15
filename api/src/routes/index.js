const { Router } = require('express');
const express = require('express');
const axios = require('axios')
const {Country, Activity} = require('../db')
const { Op } = require('sequelize')
const countries = require('./countries')
const activity = require('./activity')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use(express.json())


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countries)

// router.get('/countries', async (req,res,next) => {
//     var {name, page = 1} = req.query
//     var {filterOnFront = false, orderBy = 'name', orderType = 'ASC'} = req.body

//     if(name) name = decodeURI(name)

//     if((orderBy !== 'name' && orderBy !== 'poblation') || (orderType !== 'ASC' && orderType !== 'DESC') || isNaN(page)) {
//         return res.status(400).send('Los parametros enviados son incorrectos, no te hagas el piola')
//     }

//     var countries

//     try {
//         if(name) {
//             countries = await Country.findAll({
//                 where: {name: {[Op.iLike]: `%${name}%`}},
//                 include: {
//                     model: Activity,
//                     attributes: ['id'],
//                     through: {
//                     attributes: []
//                     }
//                 },
//                 attributes: {
//                     exclude: ['createdAt', 'updatedAt', 'capital', 'subregion', 'area']
//                 },
//                 offset: filterOnFront ? null : (page - 1)*10,
//                 limit: filterOnFront ? null : 10,
//                 order: [[orderBy, orderType]]
//             })
//         }
//         else {
//             countries = await Country.findAll({
//                 include: {
//                     model: Activity,
//                     attributes: ['id'],
//                     through: {
//                     attributes: []
//                     }
//                 },
//                 attributes: {
//                     exclude: ['createdAt', 'updatedAt', 'capital', 'subregion', 'area']
//                 },
//                 offset: filterOnFront ? null : (page - 1)*10,
//                 limit: filterOnFront ? null : 10,
//                 order: [[orderBy, orderType]]
//             })
//         }

//         if(countries.length) {
//             return res.json(countries)
//         }
//         else {
//             return res.status(204).send('No hay paises para mostrar')
//         }
//     } catch(err) {
//         console.error(err)
//         return res.status(400).send('Se pudrió todo amigo, algo pasó')
//     }

// })


// router.get('/countries/:id', async (req,res,next) => {
//     const {id} = req.params
//     try {
//         var country = await Country.findAll({
//             where: {id},
//             include: {
//                 model: Activity,
//                 attributes: {
//                     exclude: ['createdAt', 'updatedAt']
//                 },
//                 through: {
//                   attributes: []
//                 }
//             },
//             attributes: {
//                 exclude: ['createdAt', 'updatedAt']
//             }
//         })
//         if(country.length){
//             return res.json(country)
//         }
//         return res.status(204).send('No se encontro el pais :(')
//     }
//     catch(err){
//         console.error(err)
//         return res.status(400).send('Algo malió sal')
//     }
// })

router.use('/activity', activity)



// const validateActivity = function(name, difficult, duration, season, countriesIds) {
//     const seasons = ['Verano', 'Otoño', 'Primavera', 'Invierno']
//     if(!name || typeof name !== 'string') return true
//     if(difficult && (typeof difficult !== 'number' || difficult < 1 || difficult > 5)) return true
//     if(duration && (typeof duration !== 'number' || duration < 0)) return true
//     if(season && !seasons.includes(season)) return true
//     if(!Array.isArray(countriesIds) || countriesIds.length === 0) return true
//     return false
// }

// router.post('/activity', async (req,res,next) => {
//     var {name, difficult, duration, season, description, countriesIds} = req.body
//     if(!season) season = null
//     if(!description) description = null
//     if(!duration) duration = null
//     if(!difficult) difficult = null
//     if(validateActivity(name, difficult, duration, season, countriesIds)) {
//         return res.status(400).send('Datos incorrectos')
//     }
//     var activity
//     try {
//         activity = await Activity.create({name, difficult, duration, season, description})
//         await activity.setCountries(countriesIds)
//     }
//     catch(err) {
//         console.error(err)
//         activity.destroy()
//         return res.status(400).send('Datos incorrectos')
//     }
//     return res.json(activity)
// })


module.exports = router;
