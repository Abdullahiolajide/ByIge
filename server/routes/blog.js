const express = require('express')
const { createBlog, getBlogs, getBlog, myBlogs, editBlog, deleteBlog } = require('../controllers/blog')
const router = express.Router()
const parser = require('../utils/multer');


router.post('/createBlog', parser.single('image'), createBlog)
router.get('/getBlogs', getBlogs)
router.get('/getBlog/:id', getBlog)
router.get('/myBlogs/:id', myBlogs)
router.patch('/editBlog/:id', editBlog)
router.delete('/deleteBlog/:id', deleteBlog)


module.exports = router