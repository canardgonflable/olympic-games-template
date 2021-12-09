const express = require('express');
const router = express.Router();

const AthleteController = require('../controllers/athlete.controller');
const athleteController = new AthleteController();

router.get('/athletes/', async (req, res) => {
    await athleteController.list(req, res);
});

router.post('/athletes/', async (req, res) => {
    await athleteController.create(req, res);
});
// ... A COMPLETER ...

module.exports = router;
