const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WordSchema = new Schema({
    word: {type: String, required: true, max: 100},
    difficulty: {type: Number, default: 0}
})

module.exports = mongoose.model('Word', WordSchema);