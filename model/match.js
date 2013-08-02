'use strict';

var mongoose = require("mongoose")
  , Player = require("./player");

var Match = new mongoose.Schema({

  user: mongoose.Schema.Types.ObjectId,

  players: [Player],

  current: {
    type: Number,
    default: 0,
    enum: [0, 1]
  },

  state: {
    type: String,
    default: 'move',
    enum: ['move', 'discard']
  },

  initials: {
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

  winner: {
    type: Number,
    enum: [0, 1]
  }

});

Match.methods.init = function(hostUser) {
  this.players[0] = new Player({
    user: hostUser._id
  });
  this.players[0].attrs(this.initials);
  this.createdAt = new Date();
};

Match.methods.start = function(guestUser) {
  if (this.players.length != 1)
    throw new Error("Match not created by host user.");
  this.players[1] = new Player({
    user: guestUser._id
  });
  this.players[1].attrs(this.initials);
  this.startedAt = new Date();
};

module.exports = exports = mongoose.model("Match", Match);