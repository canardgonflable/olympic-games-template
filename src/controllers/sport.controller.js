const Sport = require('../models/sport.model');

class SportController {
    /**
     * Lister tous les sports
     */
    async list(req, res) {
        const sports = await Sport.find();

        res.json({
            count: sports.length,
            sports: sports
        });
    }

    /**
     * Créer un sport
     */
    async create(req, res) {
        const body = req.body;

        const sport = await Sport.create(req.body)
        console.log(body);
        console.log(sport)

        res.send('toto')

    }

    // ... A COMPLETER ...
}

module.exports = SportController;
