const express = require('express')
const { createAccount, verifyEmail, login } = require('../controllers/Auth')
const router = express.Router()

router.get('/', (req, res)=> {
    console.log('Home ')
    res.status(200).send('Hello World')
})


router.post('/register', createAccount)
router.get('/verifyEmail', verifyEmail)
router.post('/login', login)

module.exports = router
