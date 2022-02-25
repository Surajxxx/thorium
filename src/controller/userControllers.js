const userSchema = require('../models/userSchema')

const updateProfile = async function(req, res){
    let data = req.body

    let newData = await userSchema.create(data)
    res.send({profile: newData})

}

 const getProfile = async function(req, res){
    let userData = await userSchema.find()
    res.send({profile: userData})
}



module.exports.updateProfile = updateProfile
module.exports.getProfile = getProfile