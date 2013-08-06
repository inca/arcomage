'use strict';

var _ = require('underscore');

var cards = _.extend({}, require('./original_bricks'), require('./original_recruits'));
var keys = Object.keys(cards);

function getRandomKey() {
  var i = Math.floor(Math.random() * keys.length);
  return keys[i];
}

function getCard(key) {
  return cards[key];
}

module.exports = {
  cards: cards,
  keys: keys,
  getCard: getCard,
  getRandomKey: getRandomKey
};
