const Word = require('../models/word.model')

exports.word_create = function (req, res, next) {
    let word = new Word({
        word: req.body.word,
        category: req.body.category,
        difficulty: req.body.difficulty
    });
    word.save(function (err) {
        if(err) {
            return next(err)
        }
        res.send('Word Created')
  })
}

exports.word_details = function (req, res, next) {
    Word.findById(req.params.id, function (err,word) {
        if(err) return next(err);
        res.send(word);
    })
}

exports.word_update = function (req, res, next) {
    Word.findById(req.params.id, function (err,word) {
        if(err) return next(err);
        res.send(word)
    })
}

exports.word_delete = function (req, res, next) {

}

exports.word_all = function (req, res, next) {
    Word.find({}, function (err, words) {
        res.send(words)
    })
}

exports.category_all = function (req,res, next) {
    Word.find({}), function (err, categories) {
       const cat = [...new Set(categories.map(i => i.category))];
       res.send(cat)
    }
}