const express = require('express')
const router = express.Router()
const modelSchema = require('../models/personSchema')
const controller = require('../controller/functionControllers')

router.get('/test-me', function(req, res){
    res.send({status: true})
})

router.post('/newData', controller.postNewData )

router.get('/checkData', controller.getAllData )



module.exports = router;