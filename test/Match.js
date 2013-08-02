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

  it("is initialized by host user", function() {
    var match = new Match(_.extend({}, modes.easy));
    match.init(alice);
    assert.equal(match.players[0].user, alice._id);
    assert.equal(match.players[0].tower, match.initials.tower);
  });

  describe("when started by guest user", function() {

    var match = new Match(_.extend({}, modes.easy)).init(alice);
    match.start(bob);

    it("should provide players with five cards", function() {
      assert.equal(match.players[0].hand.length, 5);
      assert.equal(match.players[1].hand.length, 5);
    });

    it("should provide players with random cards", function() {
      assert.notEqual(match.players[0].hand[0], match.players[0].hand[1]);
      assert.notEqual(match.players[0].hand[0], match.players[1].hand[0]);
    });

    it("should start with a move from host player", function() {
      assert.equal(match.current, 0);
      assert.equal(match.state, 'move');
    });

  });


});