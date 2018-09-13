'use strict';

const mongoose = require('mongoose');
const {Schema} = mongoose;

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

// Creates a user
const newUser = UserModel({
  name : 'Erika',
  mail : 'erika@gmail.com',
  hash : 'IH45OHXLA467RXG'
});

// Saves it in the DB
newUser.save();

// Finds a user that is named Erika
UserModel
  .find({name: 'Erika'})
  .then( data => {
    console.log(data);
  });












