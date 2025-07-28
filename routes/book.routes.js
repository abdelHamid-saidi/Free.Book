const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.post('/book', bookController.createBook);
router.get('/books', bookController.findAll);
router.get('/book/:id', bookController.findOne);
router.put('/book/:id', bookController.update);
router.delete('/book/:id', bookController.deletee);
router.delete('/books', bookController.deleteAll);

module.exports = router;
