'use strict';

const express = require('express');
const cors = require('cors');
const api = require('./api');

// Declarer l'application
const app = express();

// Middleware
// serveur apache -> se definit dans le fichier htaccess
// Cross origin
app.use(cors());
// Parse
app.use(express.json());

app.use(api);

// Je lance le serveur
app.listen(3000, err => {
  if (!err) console.log('ca marche j\'coute sur le port 3000');
})














