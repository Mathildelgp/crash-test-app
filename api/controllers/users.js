const express = require('express');

const db = require('../../db');

const userRouter = express.Router();

userRouter.get('/users', (req, res) => {
  db.Users
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

module.exports = userRouter;