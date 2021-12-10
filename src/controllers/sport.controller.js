const Sport = require('../models/sport.model');
const Athlete = require('../models/athlete.model');

class SportController {

    /**
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async list(req, res) {
        const sports = await Sport.find();
        res.render('sports/list', {'sports': sports})
    }

    /**
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async newRender(req, res) {
        const athletes = await Athlete.find()
        res.render('sports/new', {'athletes': athletes})
    }

    /**
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async new(req, res) {
        await Sport.create(req.body)
        res.redirect('/api/sports')
    }

    /**
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async addAthlete(req, res) {
        const sportId = req.params.sportId;
        const athleteId = req.params.athleteId;

        await Sport.findOneAndUpdate({_id: sportId}, {$push: {athletes: athleteId}});

        res.redirect('/api/sports')
    }

    /**
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async listAthletes(req, res) {
        const sportId = req.params.sportId;
        const sport = await Sport.findById(sportId);
        const athletesIds = sport.athletes;

        const athletes = await Athlete.find({'_id': {$in: athletesIds}})

        res.render('athletes/list', {'athletes': athletes})
    }
}

module.exports = SportController;