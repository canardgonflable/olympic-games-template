const Athlete = require('../models/athlete.model');
const Sport = require("../models/sport.model");
const Countries = require("../data/country.json")
let redirect = '';
class AthleteController {

    /**
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async list(req, res) {
        const athletes = await Athlete.find();
        res.render('athletes/list', {'athletes': athletes})
    }

    /**
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async new(req, res) {
        await Athlete.create(req.body)
        res.redirect('/api/athletes')
    }

    /**
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async newRender(req, res) {
        res.render('athletes/new', {'countries': Countries})
    }

    /**
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async listSports(req, res) {
        const athleteId = req.params.athleteId;

        const sports = await Sport.find({'athletes': {$in: athleteId} });
        redirect = '../';
        res.render('sports/list', {'sports': sports, 'redirect': redirect })
    }
}

module.exports = AthleteController;
