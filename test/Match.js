'use strict';

var User = require("../model/user")
  , Player = require("../model/player")
  , Match = require("../model/match")
  , assert = require("assert")
  , modes = require("../modes")
  , _ = require("underscore");

describe("Match", function() {

  var alice = new User({ name: 'Alice', email: 'alice@arcomage' });
  var bob = new User({ name: 'Bob', email: 'bob@arcomage' });

  it("is created by host user", function() {
    var match = new Match(_.extend({}, modes.easy));
    match.init(alice);
    assert.equal(match.players[0].user, alice._id);
    assert.equal(match.players[0].tower, match.initials.tower);
  });

});