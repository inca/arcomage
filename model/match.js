'use strict';

var mongoose = require("mongoose")
  , Player = require("./player")
  , Cards = require("../cards");

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
  this.players[0].setAttrs(this.initials);
  this.createdAt = new Date();
  return this;
};

Match.methods.start = function(guestUser) {
  if (this.players.length != 1)
    throw new Error("Match not created by host user.");
  this.players[1] = new Player({
    user: guestUser._id
  });
  this.players[1].setAttrs(this.initials);
  this.startedAt = new Date();
  // Draw random cards
  for (var i = 0; i < 5; i++) {
    this.players[0].hand.push(Cards.getRandomKey());
    this.players[1].hand.push(Cards.getRandomKey());
  }
  return this;
};

Match.methods.me = function() {
  return this.players[this.current];
};

Match.methods.him = function() {
  return this.players[(this.current + 1) % 2];
};

Match.methods.nextPlayer = function() {
  this.me().modAttrs({
    bricks: this.me().quarry,
    gems: this.me().magic,
    recruits: this.me().dungeon
  });
  this.current = (this.current + 1) % 2;
};

Match.methods.move = function(index) {
  var cardKey = this.me().hand[index];
  var card = Cards.getCard(cardKey);
  this.me().modAttrs(card.resource, -card.cost);
  card.play(this);
  this.me().hand[index] = Cards.getRandomKey();
};

Match.methods.discard = function(index) {
  this.me().hand[index] = Cards.getRandomKey();
  if (this.state == "move") this.nextPlayer();
  else (this.state = "move");
};

module.exports = exports = mongoose.model("Match", Match);