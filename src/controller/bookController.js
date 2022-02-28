const { reset } = require('nodemon')
const BookModel = require('../models/bookModel')


const createBook = async function(req, res){
let bookData = req.body

let book = await BookModel.create(bookData)
res.send({msg: book})

}

const getBook = async function (req, res){

    let book = await BookModel.find().select({bookName: 1, authorName: 1, _id : 0})
    res.send({msg: book})
}

const booksInYear = async function (req, res){

    let year = req.body.year

    let book = await BookModel.find({year : year})
    res.send({msg: book})
}

const particularBooks = async function (req, res){

    let arr = Object.keys(req.body) //["year"]
    let property = arr[0] // year
    let value = req.body[property] //value
    
     console.log(property)
    console.log(value)
    //  [[prop, val], [prop1, val2],]

    let book = await BookModel.find({property : value})
    res.send({msg: book})
}

const getINRBooks = async function(req,res){

        
    let book = await BookModel.find({"price.indianPrice" :  {$in : ["100 RS", "200 RS", "500 RS"]}}) 
    res.send({msg: book})
}

const getRandomBooks = async function(req,res){
    let book = await BookModel.find({$or: [{totalPages : {$gt : 500}}, {stockAvailable: {$eq : true}}]})
    res.send({msg : book})
}







module.exports.createBook = createBook
module.exports.getBook = getBook
module.exports.booksInYear = booksInYear
module.exports.particularBooks = particularBooks
module.exports.getINRBooks = getINRBooks
module.exports.getRandomBooks = getRandomBooks