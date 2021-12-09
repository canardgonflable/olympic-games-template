const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://ipilyon:ipilyon12345@ipinodejsmagnin.orrut.mongodb.net/jeux_olympiques'

//mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', function() {
    console.log('Connected to the database! ✅');
});
