const { Router } = require('express');
const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Country, Activity} = require('../db')
const axios = require('axios')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json())

var swap = true

async function getCountries(req,res,next) {
    if(swap) {
        axios.get('https://restcountries.eu/rest/v2/all').then(response => {
            response.data.forEach(country => 
                Country.create({id: country.alpha3Code,
                    name: country.name,
                    flag: country.flag,
                    continent: country.region,
                    capital: country.capital,
                    subregion: country.subregion,
                    area: country.area,
                    poblation: country.population
                })
            )
        }).catch(err => console.log(err))
        swap = false
        console.log('ciudades cargadas')
    }
    next()
}



router.get('/countries', getCountries, async (req,res,next) => {
    const countries = await Country.findAll()
    return res.send(countries)
})

router.get('/countries/:id', async (req,res,next) => {
    const {id} = req.params
    if(!id) {
        return res.status(404).send('Ups, el id no es valido')
    }
    const country = await Country.findByPk(id)
    return res.send(country)
})

router.get('/countries', (req,res,next) => {
})

router.post('/activity', (req,res,next) => {
})


module.exports = router;
