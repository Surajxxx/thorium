const express = require('express');
const app = express.Router();


        app.get('/sol1', function(req, res){
            let array = [1,2,3,5,6,7,8,9]
            let sumOfArray = 0
            let lastElement = array[array.length -1]
             for (let i =0; i< array.length; i++ ){
                 sumOfArray = sumOfArray + array[i]
             }
             let actualSumOfArray = (lastElement * (lastElement + 1)) / 2
             let missingNumber = actualSumOfArray - sumOfArray
             console.log(missingNumber)
             res.send({"data": missingNumber})
        })

        app.get('/sol2', function(req, res){
            let array = [33,34,35,37,38]
            let beforeFirstElement = array[0] - 1
            let lastElement = array[array.length - 1]
            let sumOfArray = 0
            for (let i =0; i< array.length; i++ ){
                sumOfArray = sumOfArray + array[i]
            }

            let sumOfNumberBeforeFirst = (beforeFirstElement * (beforeFirstElement + 1)) / 2
            let sumOfNumberTillLast = (lastElement * (lastElement + 1)) / 2
            let missingNumber = (sumOfNumberTillLast - sumOfNumberBeforeFirst) - sumOfArray
             res.send({"data": missingNumber})

        })


module.exports = app;

