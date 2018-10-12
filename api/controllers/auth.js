const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const db = require('../../db');


function generate_token (user) {
  const payload = {
    exp: moment().add(14, 'days').unix(), // 1014 - 1015
    iat: moment().unix(), // 1000
    iss: user.mail,
    sub : user.hash
  }
  //global.app.secret
  return jwt.sign(payload, 'rhododendron');
}


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
      res.send(generate_token(u));
      // Pour de vrai on veut send le token de l'utilisateur
      // Et SURTOUT PAS LE HASH !!!
      // GROSSE faille de securite
    });
  },

  signin : (req, res) => {
    // req.body -> name, pwd
    db.Users
      .find({mail : req.body.mail})
      .then( users => {

        if (users[0]) {
          isPasswordValid = bcrypt.compareSync(req.body.pwd, users[0].hash);
          if (isPasswordValid) res.send(generate_token(users[0]));
          else res.send('mecreant !');
        }
        // je veux comparer user.hash a la version hash de req.body.pwd
        else res.send('mecreant !');
      });
  },

  verify_token : (req, res, next) => {
    const token = req.query.token;

    if (!token) res.send ('Authorization Required');
    else {
      jwt.verify(token, 'rhododendron', (err, decoded_payload) => {
        if (err) res.send('Invalid token');
        if (decoded_payload.exp < moment().unix()) res.send('Token expired');
        else next();
      });
    }
  }

}

module.exports = authController;