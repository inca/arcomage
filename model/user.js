'use strict';

var mongoose = require("mongoose");

var User = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    max: 160
  },

  email: {
    type: String,
    required: true,
    validate: /^\S+@\S+$/,
    max: 160
  },

  password: String

});

module.exports = exports = mongoose.model("User", User);