const mongoose = require('mongoose')

const boojShema = new mongoose.Schema(
    {
        title: String,
        author: String, 
        genre : String, 
        publicaction_date: String,
    }
)


module.exports = mongoose.model('Book', boojShema)