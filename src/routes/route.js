let obj = require('./logger.js')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.myPrintText("hello i am thorium")
    console.log(obj.googleLink)
    res.send('My first ever api!')
});

module.exports = router;