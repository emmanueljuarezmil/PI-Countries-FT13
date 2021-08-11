const { Router } = require('express');
const express = require('express');
const { getCountries, getCountryById, postActivity, getActivites } = require('../controllers')

const router = Router();

router.get('/countries', getCountries)
router.get('/countries/:id', getCountryById)

router.get('/activity', getActivites)
router.post('/activity', postActivity)

module.exports = router;
