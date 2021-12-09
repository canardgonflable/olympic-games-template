const express = require('express');

const app = express();

app.use(express.json());

// Ajouter les routes via les routers
const apiUrl = '/api'

const sportRouter = require('./routers/sport.router');
const athleteRouter = require('./routers/athlete.router');

app.use(apiUrl, sportRouter);
app.use(apiUrl, athleteRouter);

// ... A COMPLETER ...

// Connexion à la base de données
require('./database/mongodb');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port} 🚀`);
});

