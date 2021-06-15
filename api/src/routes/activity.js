const { Router } = require('express');
const express = require('express');
const axios = require('axios')
const {Country, Activity} = require('../db')
const { Op } = require('sequelize')
const {postActivity} = require('../controllers')

const router = Router();
router.use(express.json())

router.post('/', postActivity)

module.exports = router