const { Router } = require('express');
const express = require('express');
const {getCountriesById, getCountries} = require('../controllers')

const router = Router();
router.use(express.json())

router.get('/', getCountries)

router.get('/:id', getCountriesById)

module.exports = router