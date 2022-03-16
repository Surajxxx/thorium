const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/authorController')
const BlogsController = require('../controllers/blogsController')
const AuthMiddleWare = require('../middleWare/auth')

router.get('/test', function(req, res){
    res.status(200).send({status: true, message: "test api working fine"})
})

// Create author
router.post('/authors', AuthorController.createAuthor)

//login
router.get('/login', AuthorController.login)

// Create blogs
router.post('/blogs', AuthMiddleWare.authentication, BlogsController.createBlogs )

// Get blogs 
router.get('/blogs', AuthMiddleWare.authentication, BlogsController.getFilteredBlogs)

//update blogs
router.put('/blogs/:blogId', AuthMiddleWare.authentication, AuthMiddleWare.authorization, BlogsController.updateBlog)

//Deleted blogs by params
router.delete('/blogs/:blogId',AuthMiddleWare.authentication, AuthMiddleWare.authorization, BlogsController.deleteBlog)
router.delete('/blogs', AuthMiddleWare.authentication, BlogsController.deleteFilteredBlog)


module.exports = router;