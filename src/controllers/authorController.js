const AuthorModel = require('../models/authorModel')


const createAuthor = async function (req, res) {

    try {
        let authorData = req.body
        let author = await AuthorModel.create(authorData)
        res.status(200).send({ status: true, data: author })

    } catch (error) {
        res.status(500).send({ error: error.message })
   }
}

module.exports.createAuthor = createAuthor