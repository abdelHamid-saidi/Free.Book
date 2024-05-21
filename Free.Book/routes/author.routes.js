const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author.controller');

router.post('/author', authorController.create);
router.get('/authors', authorController.findAll);
router.get('/author/:id', authorController.findOne);
router.put('/author/:id', authorController.update);
router.delete('/author/:id', authorController.deletee);
router.delete('/authors', authorController.deleteAll);

module.exports = router;
