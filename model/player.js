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

Player.pre('save', function() {
  attrs.forEach(function(a) {
    if (this[a] < 0)
      this[a] = 0;
  });
});

Player.methods.setAttrs = function(obj, value) {
  var player = this;
  if (value) {
    player[obj] = value;
  } else attrs.forEach(function(a) {
    if (typeof (obj[a]) != "undefined")
      player[a] = obj[a];
  });
};

Player.methods.modAttrs = function(obj, value) {
  var player = this;
  if (value) {
    player[obj] = value;
  } else attrs.forEach(function(a) {
    if (typeof (obj[a]) != "undefined")
      player[a] += obj[a];
  });
};

Player.methods.damage = function(value, toTower) {
  var player = this;
  if (value < 0)
    value = 0;
  if (toTower)
    player.tower -= value;
  else {
    if (player.wall >= value) {
      player.wall -= value
    } else {
      player.tower -= (value - player.wall);
      player.wall = 0
    }
  }
  return this;
};

module.exports = exports = mongoose.model("Player", Player);