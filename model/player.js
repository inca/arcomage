'use strict';

var mongoose = require("mongoose");
var attrs = ['tower', 'wall', 'quarry', 'bricks', 'magic', 'gems', 'dungeon', 'recruits'];

var Player = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  tower: Number,
  wall: Number,

  quarry: Number,
  bricks: Number,

  magic: Number,
  gems: Number,

  dungeon: Number,
  recruits: Number,

  hand: [String]

});

Player.methods.set = function(obj) {
  attrs.forEach(function(a) {
    if (typeof (obj[a]) != "undefined")
      this[a] = obj[a];
  });
};

module.exports = exports = mongoose.model("User", User);