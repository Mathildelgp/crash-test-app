'use strict';

const mongoose = require('mongoose');
const {Schema} = mongoose;

// CONNECTION
// Normalement ces données sont gardées dans un fichier .env
// declarees en Shell
// puis recuperees grace a process.env
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

var Users = require('./models/users');

// var db = require('db');
// on puisse require db.USers.find()

module.exports = {
  Users: Users
  // Products
  //Articles
};









