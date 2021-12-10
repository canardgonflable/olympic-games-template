const Sport = require('../models/sport.model');
const Athlete = require('../models/athlete.model');

class SportController {
    /**
     * Lister tous les sports
     */
    async list(req, res) {
        const sports = await Sport.find();
        res.render('sports/list', {'sports': sports})
    }

    async newRender(req, res) {
        const athletes = await Athlete.find()
        res.render('sports/new', {'athletes': athletes})
    }

    /**
     * Créer un sport
     */
    async new(req, res) {
        await Sport.create(req.body)
        res.redirect('/api/sports')
    }

    async addAthlete(req, res) {
        const sportId = req.params.sportId;
        const athleteId = req.params.athleteId;

        await Sport.findOneAndUpdate({_id: sportId}, {$push: {athletes: athleteId}});

        res.redirect('/api/sports')
    }

    async listAthletes(req, res) {
        const sportId = req.params.sportId;
        const sport = await Sport.findById(sportId);
        const athletesIds = sport.athletes;

        const athletes = await Athlete.find({'_id': {$in: athletesIds}})

        res.render('athletes/list', {'athletes': athletes})
    }
}

module.exports = SportController;