const mongoose = require('mongoose')

const modelSchema = new mongoose.Schema({

    firstName : {
        type : String,
        required: true,
        uppercase : true
    },
    lastName: {
        type : String,
        lowercase : true
    },
    age:{
        type : Number,
        min : 15,
        max : 100
    } ,
    mobile: {
        type : String,
        unique : true,
        required: true

    },
    isIndian : Boolean,
    Cars : [String],
    gender : {
        type : String,
       enum : ["Male", "Female"] //enumeration
    }

},{timestamps : true} )


module.exports = mongoose.model("Profile", modelSchema)