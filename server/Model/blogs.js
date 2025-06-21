const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
     content: {
        type:String,
        required:true
    },
    imageUrl: {
        type:String
    },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // this line is necessary for populate to work
}
})

module.exports = mongoose.model('Blog', blogSchema)