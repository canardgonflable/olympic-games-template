const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'hbs');

// on indique que nos vues se trouverons toujours dans le dossier views
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index', { name: 'Jeux olympiques' });
});

// Ajouter les routes via les routers
const apiUrl = '/api'

const sportRouter = require('./routers/sport.router');
const athleteRouter = require('./routers/athlete.router');

app.use(apiUrl, sportRouter);
app.use(apiUrl, athleteRouter);

// ... A COMPLETER ...

// Connexion à la base de données
require('./database/mongodb');

app.use('/public', express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port} 🚀`);
});

