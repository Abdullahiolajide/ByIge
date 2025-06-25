const express = require('express')
const { createBlog, getBlogs, getBlog } = require('../controllers/blog')
const router = express.Router()
const parser = require('../utils/multer');


router.post('/createBlog', parser.single('image'), createBlog)
router.get('/getBlogs', getBlogs)
router.get('/getBlog/:id', getBlog)


module.exports = router