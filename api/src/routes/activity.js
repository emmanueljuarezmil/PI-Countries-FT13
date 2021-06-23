const { Router } = require('express');
const express = require('express');
const {postActivity} = require('../controllers')

const router = Router();
router.use(express.json())

router.post('/', postActivity)

module.exports = router