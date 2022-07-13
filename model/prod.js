const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const studSchema = new Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    category: {type: String},
    name: {type: String},
    price: {type: Number},
    type: {type: String},
    date: {type: Date},
    slug: {type: String},
    heroimg: {type: String},
    secimg: {type: String},
    mainmaterial: {type: String},
    otherimgs: [String],
    otherMaterials: [String],
    length: {type: Number},
    style: [String]
})

module.exports = mongoose.model('sche', studSchema)