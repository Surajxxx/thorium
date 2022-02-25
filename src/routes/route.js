const express = require('express')
const router = express.Router()
const controller = require('../controller/userControllers')
const userSchema = require('../models/userSchema')

router.post('/profile', controller.updateProfile )

router.get('/getData', controller.getProfile)


module.exports = router;