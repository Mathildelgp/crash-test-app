const express = require('express');
const bcrypt = require('bcrypt');

const db = require('../../db');

const authController = {

  signup : (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.pwd, salt);

    const user = {
      name: req.body.name,
      mail: req.body.mail,
      hash: hash
    }

    const newUser = new db.Users(user);
    newUser.save()
    .then( u => {
      res.send(u);
      // Pour de vrai on veut send le token de l'utilisateur
      // Et SURTOUT PAS LE HASH !!!
      // GROSSE faille de securite
    });
  },

  signin : (req, res) => {
    // req.body -> name, pwd
    db.Users
      .find({name : req.body.name})
      .then( users => {

        if (users[0]) {
          isPasswordValid = bcrypt.compareSync(req.body.pwd, users[0].hash);
          if (isPasswordValid) res.send('vous etes login');
          else res.send('mecreant !');
        }
        // je veux comparer user.hash a la version hash de req.body.pwd
        else res.send('mecreant !');
      });
  },

  validate : (req, res) => {
    res.send('validate');
  }

}

module.exports = authController;