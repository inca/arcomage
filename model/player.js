'use strict';

var mongoose = require("mongoose");
var attrs = ['tower', 'wall', 'quarry', 'bricks', 'magic', 'gems', 'dungeon', 'recruits'];

var Player = new mongoose.Schema({

  user: mongoose.Schema.Types.ObjectId,

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

Player.methods.attrs = function(obj) {
  var player = this;
  attrs.forEach(function(a) {
    if (typeof (obj[a]) != "undefined")
      player[a] = obj[a];
  });
};

module.exports = exports = mongoose.model("Player", Player);