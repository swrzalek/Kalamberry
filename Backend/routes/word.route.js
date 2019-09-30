const express = require('express');
const router = express.Router();

const word_controller =
        require('../controllers/word.controller');

router.post('/dictonary' , word_controller.word_create);
router.get('/dictonary/:id' , word_controller.word_details);
router.put('/dictonary/:id' , word_controller.word_update);
router.delete('/dictonary/:id' , word_controller.word_delete);
router.get('/dictonary' , word_controller.word_all);

module.exports = router;