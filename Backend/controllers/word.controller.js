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
    Word.findOneAndDelete(req.params.id, function(err,word) {
        if(err) res.send(err)           
            res.send("Deleted!")
        }) 
}

exports.word_all = function (req, res, next) {
    Word.find({}, function (err, words) {
        res.send(words)
    })
}

exports.category_all = function (req,res, next) {
    Word.find({}, function (err, categories) {
       const cat = [...new Set(categories.map(i => i.category))];
       if(err) res.send(err)
       res.send(cat)
    })
}

exports.words_from_category = function(req,res,next) {
    Word.find({        
        $and: [
            { category: {$in: Array.isArray(req.query.category) ? req.query.category : [req.query.category]}},
            { difficulty: req.query.difficulty}
        ]}, function (err, words) {
            if(err) res.send(err)
            res.send(words)
        })
}


