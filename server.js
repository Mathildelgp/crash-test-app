'use strict';

const mongoose = require('mongoose');
const {Schema} = mongoose;

const express = require('express');
const cors = require('cors');

// Declarer l'application
const app = express()

// Middleware
// serveur apache -> se definit dans le fichier htaccess
// Cross origin
app.use(cors());
// Parse
app.use(express.json());

// CONNECTION

const connect = {
  host : 'localhost',
  port: 27017,
  dbName: 'mongodbtest'
}

// mongoose.connect('mongodb://localhost:27017/test')
mongoose.connect('mongodb://' + connect.host + ':' + connect.port + '/' + connect.dbName);

mongoose.connection.on('connected', err => {
  console.log('La connection a fonctionné !!');
});

mongoose.connection.on('error', err => {
  console.log('Il y a une erreur');
});

mongoose.connection.on('disconnected', err => {
  console.log('La connection est rompu');
  process.exit(0);
});

process.on('SIGINT', err => {
  mongoose.connection.close( err => {
    console.log('Le process a planté');
    process.exit(0);
  });
});

// DEFINIR NOS SCHEMAS 

// EN noSQL
// Schema prototype un moule general pour ma table/collection
const UserSchema = new Schema ({
  name : {
    type: String,
    required: true,
    unique: true
  },
  mail: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  }
});

// UserSchema.find(...)

// EN SQL : 'CREATE TABLE users (name TEXT, mail TEXT NOT NULL, hash NOT NULL)'

// Permet de definir un set de methodes accessible pour votre collection ou un item de votre collection 
const UserModel = mongoose.model('Users', UserSchema);

// Definir les requetes

app.get('/users', (req, res) => {
  UserModel
    .find()
    .then( data => {
      console.log(data);
      // MVC : Model View Controller
      // Il peut soit utiliser une view
      // pour construire une template server-side
      // h1 data.title
      //  div.content data.content

      // ce qui est envoyé au front
      // C'est un fichier html deja construit
      // Avec eventuellement quelques script js
      // d'animation etc..

      // res.send(fichier)

      // MVVM : Model View View Model
      // res.send(data)
      res.send(data);

  })
});

// Je lance le serveur
app.listen(3000, err => {
  if (!err) console.log('ca marche j\'coute sur le port 3000');
})














