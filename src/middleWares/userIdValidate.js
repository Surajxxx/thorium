const UserModel = require('../models/userModel')

const userIdValidate = async function (req,res, next){
    let id = req.params.userId
    let user =  await UserModel.findById(id)
    if(!user) return res.send({status: false, msg: "User ID does not exist"})
    next()

}

module.exports.userIdValidate = userIdValidate