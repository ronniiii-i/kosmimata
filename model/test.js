const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TestSchema = new Schema({

    _id: mongoose.Schema.Types.ObjectId,
    Email:{type: String}

})

module.exports = mongoose.model('test1', TestSchema)