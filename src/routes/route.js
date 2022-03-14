const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/authorController')
const BlogsController = require('../controllers/blogsController')

router.get('/test', function(req, res){
    res.status(200).send({status: true, message: "test api working fine"})
})

// Create author
router.post('/authors', AuthorController.createAuthor)


// Create blogs
router.post('/blogs', BlogsController.createBlogs )

// Get blogs 
router.get('/blogs', BlogsController.getFilteredBlogs)

//update blogs
router.put('/blogs/:blogId', BlogsController.updateBlog)

//Deleted blogs by params
router.delete('/blogs/:blogId', BlogsController.deleteBlog)
router.delete('/blogs', BlogsController.deleteFilteredBlog)

module.exports = router;