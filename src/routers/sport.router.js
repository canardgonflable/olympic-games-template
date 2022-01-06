const express = require('express');
const router = express.Router();

const SportController = require('../controllers/sport.controller');
const sportController = new SportController();

router.get('/sports/', async (req, res) => {
    await sportController.list(req, res);
});

// Afficher les athlètes d'un sport
router.get('/sports/:sportId/athletes', async (req, res) => {
    await sportController.listAthletes(req, res);
});

router.get('/sports/new', async (req, res) => {
    await sportController.newRender(req, res)
});

router.post('/sports/', async (req, res) => {
    await sportController.new(req, res);
});

router.delete('/sports/:_id', async (req, res) => {
    await sportController.delete(req, res);
});

router.post('/sports/:sportId/athletes/:athleteId', async (req, res) => {
    await sportController.addAthlete(req, res);
});



// ... A COMPLETER ...

module.exports = router;
