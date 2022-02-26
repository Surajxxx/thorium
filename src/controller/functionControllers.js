const modelSchema = require('../models/personSchema')

const postNewData = async function(req, res){

    let data = req.body

    let updateData = await modelSchema.create(data)
    res.send({newUser: updateData })

}

const getAllData =  async function(req, res){

    let checkedData = await modelSchema.find()
    res.send({allProfiles: checkedData})
}





module.exports.postNewData = postNewData
module.exports.getAllData = getAllData