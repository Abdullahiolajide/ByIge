const express = require('express')
const { createAccount, verifyEmail } = require('../controllers/Auth')
const router = express.Router()

router.get('/', (req, res)=> {
    console.log('Home ')
    res.status(200).send('Hello World')
})


router.post('/register', createAccount)
router.get('/verifyEmail', verifyEmail)

module.exports = router
