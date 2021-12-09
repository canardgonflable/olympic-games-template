const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ipilyon:ipilyon12345@ipinodejsmagnin.orrut.mongodb.net/jeux_olympiques', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', function() {
    console.log('Connected to the database! ✅');
});
