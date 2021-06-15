const { Router } = require('express');
const express = require('express');
const axios = require('axios')
const {Country, Activity} = require('../db')
const { Op } = require('sequelize')
const {getCountriesById, getCountries} = require('../controllers')

const router = Router();
router.use(express.json())

router.get('/', getCountries)

router.get('/:id', getCountriesById)

module.exports = router