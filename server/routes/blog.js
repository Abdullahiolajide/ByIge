const express = require('express')
const { createBlog, getBlogs } = require('../controllers/blog')
const router = express.Router()
const parser = require('../utils/multer');


router.post('/createBlog', parser.single('image'), createBlog)
router.get('/getBlogs', getBlogs)


module.exports = router