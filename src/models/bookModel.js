const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName : {
        type : String,
        required: true
    },
    price : {
        indianPrice : String,
        euroPrice : String
    },
    year : {
        type : Number,
        default : 2021
    },
    tags : [String],
    authorName : String,
    totalPages : Number,
    stockAvailable : Boolean

})

module.exports = mongoose.model('Novel', bookSchema)