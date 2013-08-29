'use strict';

var app = require("../app")
  , cards = require("../cards");

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/prototype", function(req, res) {
  var _cards = [];
  for (var i = 0; i < 5; i++) {
    _cards.push(cards.getCard(cards.getRandomKey()))
  }
  res.render("prototype", {
    cards: _cards
  });
});