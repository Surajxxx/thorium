const jwt = require('jsonwebtoken')

const validateToken = async function (req, res, next){
    let token = req.headers["x-auth-token"]

    if(!token) return res.send({status: false, msg: "[x-auth-token] must be provided"})

    let tokenValidation = await jwt.verify(token, "surajdubey")

    if(!tokenValidation) return res.send({status: false, msg:"Invalid token"})
    next()
}

module.exports.validateToken = validateToken