'use strict';

var mongoose = require("mongoose")
  , Player = require("Player");

var Match = new mongoose.Schema({

  host: Player.schema,

  guest: Player.schema,

  init: {

    tower: Number,
    wall: Number,

    quarry: Number,
    bricks: Number,

    magic: Number,
    gems: Number,

    dungeon: Number,
    recruits: Number

  },

  win: {
    tower: Number,
    resources: Number
  },

  createdAt: Date,

  startedAt: Date,

  endedAt: Date,

  winner: String,

  current: String

});

Match.methods.create = function(hostUser) {
  this.host = new Player({
    user: hostUser
  });
  this.host.set(this.init);
  this.createdAt = new Date();
};

Match.methods.start = function(guestUser) {
  this.guest = new Player({
    user: guestUser
  });
  this.guest.set(this.init);
  this.startedAt = new Date();
};

module.exports = exports = mongoose.model("Match", Match);