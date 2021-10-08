const mongoose = require('mongoose')

mongoose.connect(`${process.env.mongodb}/quizdb`)

module.exports = mongoose
