const express = require('express');

const db = require('../../db');

const authController = {

  signup : () => {
    res.send('signup');
  },

  signin : (req, res) => {
    res.send('signin');
  }

}

module.exports = authController;