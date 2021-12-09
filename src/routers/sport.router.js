const express = require('express');
const router = express.Router();

const SportController = require('../controllers/sport.controller');
const sportController = new SportController();

router.get('/sports/', async (req, res) => {
    await sportController.list(req, res);
});

router.post('/sports/', async (req, res) => {
    await sportController.create(req, res);
});



// ... A COMPLETER ...

module.exports = router;
