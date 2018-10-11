const express = require('express');

const db = require('../../db');

// Si il s'agit d'authentification direct/endpoint
// je n'utilise pas le controller users

// Exemple Facebook : pour ce qui concerne mon signup/signin
// j'utilise auth.js
// Pour afficher tout mes amis (autres users)
// POur afficher des données d'autres users
// J'utilise ce controller là
userController = {

  findAll : (req,res) => {
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
  }
};

module.exports = userController;