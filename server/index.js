const express = require('express')
const app = express()
const auth = require('./routes/Auth')
const dashboard = require('./routes/dashboard')
const blog = require('./routes/blog')
const connectDB = require('./db/connect')
const PORT = 4000
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use('/api/auth/', auth)
app.use('/api/dashboard', dashboard)
app.use('/api/blogs', blog)
// get
// post
// Put
// patch  
// delete 

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=> console.log(`Server is running at port ${PORT}`))
    }
    catch(error){
        console.log(error)
    }
}
start()

