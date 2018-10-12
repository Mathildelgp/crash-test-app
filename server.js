'use strict';

const express = require('express');
const cors = require('cors');
const api = require('./api');

const config = require('./config.js');
Object.assign(global, config);

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
app.listen(4000, err => {
  if (!err) console.log('ca marche j\'coute sur le port 3000');
})














