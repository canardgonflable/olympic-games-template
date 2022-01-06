'use strict';

const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
    name: String,
    category: String,
    athletes : [{ type: mongoose.Types.ObjectId, ref: 'Athlete' }]
});

const Sport = mongoose.model('Sport', sportSchema);

module.exports = Sport;
