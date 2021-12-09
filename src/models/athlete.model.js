'use strict';

const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const athleteSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    country: String

    // ... A COMPLETER ...
    // Exemple :
    // athletes : [{ type: Schema.Types.ObjectId, ref: 'Athlete' }]
});

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;
