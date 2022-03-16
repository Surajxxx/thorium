const BlogsModel = require('../models/blogsModel')
const AuthorModel = require('../models/authorModel')

const createBlogs = async function (req, res) {
    try {
        let blogData = req.body
        let id = req.body.authorId 
        if (Object.keys(blogData).length == 0) return res.status(400).send({ status: false, msg: "Please provide input data" })
        if (!id) return res.status(400).send({ status: false, msg: "Please provide author ID" })
        let author = await AuthorModel.findById(id)
        if (!author) return res.status(404).send({ status: false, msg: "Please provide valid author ID" })

        let blog = await BlogsModel.create(blogData)
        res.status(201).send({ status: true, data: blog })

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}


const getFilteredBlogs = async function (req, res) {
    try {
        let input = req.query
        let filters = Object.entries(input)
        let filtersAsObject = []
        for(let i=0 ; i<filters.length; i++){
            let element = filters[i]
            let obj = {}
            obj[element[0]] = element[1]
            filtersAsObject.push(obj)
        }
        let conditions = [{isDeleted : false}, {isPublished : true}]
        let finalFilters = conditions.concat(filtersAsObject)
       
        if (input) {
            let blogs = await BlogsModel.find({ $and : finalFilters})
            if (blogs.length == 0) return res.status(404).send({ status: false, msg: "no blogs found" })
            res.status(200).send({ status: true, data: blogs })
        } else {
            let blogs = await BlogsModel.find({ $and : conditions })
            if (blogs.length == 0) return res.status(404).send({ status: false, msg: "no blogs found" })
            res.status(200).send({ status: true, data: blogs })
        }
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const updateBlog = async function (req, res) {

    let inputData = req.body
    let newTitle = req.body.title
    let newBody = req.body.body
    let newTag = req.body.tags
    let newSubCategory = req.body.subcategory
    let id = req.params["blogId"]
    try {
        if (Object.keys(inputData).length == 0) return res.status(400).send({ status: false, msg: "please provide input data" })
        
        let blog = await BlogsModel.findByIdAndUpdate(
            { _id: id},
            { $set: { title: newTitle, body: newBody, isPublished: true, publishedAt: Date.now() }, $push: { tags: newTag, subcategory: newSubCategory } },
            { new: true }
        )
             res.status(200).send({ status: true, data: blog })
    } catch (error) {
        console.log(error.message)
   }

}

const deleteBlog = async function (req, res) {
    try {
        let id = req.params.blogId
        let markDirty = await BlogsModel.findByIdAndUpdate({ _id: id }, { $set: { isDeleted: true, deletedAt: Date.now() } }, { new: true })

        res.status(200).send()

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const deleteFilteredBlog = async function (req, res) {
    try {
        let input = req.query
        
        if(Object.keys(input).length == 0) return res.status(400).send({status: false, msg: "please provide input data" })
        let deletedBlog = await BlogsModel.updateMany({ $and: [input, { isDeleted: false }] }, { $set: { isDeleted: true, deletedAt: Date.now() } }, { new: true })
        
        res.status(200).send()
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}



module.exports.createBlogs = createBlogs
module.exports.getFilteredBlogs = getFilteredBlogs
module.exports.updateBlog = updateBlog
module.exports.deleteBlog = deleteBlog
module.exports.deleteFilteredBlog = deleteFilteredBlog

