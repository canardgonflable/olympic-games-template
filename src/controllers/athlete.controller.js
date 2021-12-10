const Athlete = require('../models/athlete.model');
const Sport = require("../models/sport.model");

class AthleteController {
    /**
     * Lister tous les athlètes
     */
    async list(req, res) {
        const athletes = await Athlete.find();
        res.render('athletes/list', {'athletes': athletes})
    }

    /**
     * Créer un athlète
     */
    async new(req, res) {
        await Athlete.create(req.body).then(res.redirect('/api/athletes'))

    }

    async listSports(req, res) {
        const athleteId = req.params.athleteId;

        const sports = await Sport.find({'athletes': {$in: athleteId} });

        res.render('sports/list', {'sports': sports})
    }
}

module.exports = AthleteController;
