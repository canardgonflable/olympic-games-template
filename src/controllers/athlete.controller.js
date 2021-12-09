const Athlete = require('../models/athlete.model');

class AthleteController {
    /**
     * Lister tous les athletes
     */
    async list(req, res) {
        const athletes = await Athlete.find();

        res.json({
            count: athletes.length,
            athletes: athletes
        });
    }

    /**
     * Créer un athlète
     */
    async create(req, res) {
        const body = req.body;
        const athlete = await Athlete.create(req.body)
        console.log(body);
        console.log(athlete)

        res.send('Athlète créé !')
    }

    // ... A COMPLETER ...
}

module.exports = AthleteController;
