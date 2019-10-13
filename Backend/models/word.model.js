const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categories = ["postacie", "marki", "podroze"]

let WordSchema = new Schema({
    word: {
        type: String,
         required: true,
          max: 100
        },
    category: {
        type: String,
        required: true,
        enum: categories,
         max: 100
        },
    difficulty: {
        type: Number,
        min: [0, 'Not between 0 - 2'],
        max: 2,
        default: 0
    }
})

module.exports = mongoose.model('Word', WordSchema);