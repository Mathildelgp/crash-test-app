const mongoose = require('mongoose');
const {Schema} = mongoose;
// DEFINIR NOS SCHEMAS 

// EN noSQL
// Schema prototype un moule general pour ma table/collection
// C'est un peu comme une @Entity en Java.
const UserSchema = new Schema ({
  name : {
    type: String,
    required: true,
    unique: true
  },
  mail: {
    type: String,
    required: true,
    unique: true
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

module.exports = UserModel;