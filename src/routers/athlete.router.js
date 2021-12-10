const express = require('express');
const router = express.Router();

const AthleteController = require('../controllers/athlete.controller');
const athleteController = new AthleteController();

// Index athlètes
router.get('/athletes/', async (req, res) => {
    await athleteController.list(req, res);
});

// Route vers formulaire de création
router.get('/athletes/new', async (req, res) => {
    res.render('athletes/new')
});

// Méthode POST pour enregistrer les données avec le formulaire
router.post('/athletes/', async (req, res) => {
    await athleteController.new(req, res);
});

// Afficher les athlètes d'un sport
router.get('/athletes/:athleteId/sports', async (req, res) => {
    await athleteController.listSports(req, res);
});



// ... A COMPLETER ...

module.exports = router;
