const express = require('express')
const router = express.Router();
const {getUser} = require('../controllers/dashbord')
const authMiddleware = require('../middleawre/auth')

router.use(authMiddleware);

router.get('/', getUser);

module.exports = router
