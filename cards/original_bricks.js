'use strict';

module.exports = {

  'Brick Shortage': {
    resource: 'bricks',
    cost: 0,
    description: 'All players<br/>lose 8 bricks',
    play: function(match) {
      match.me().bricks -= 8;
      match.him().bricks -= 8;
      match.nextPlayer();
    }
  },

  'Lucky Cache': {
    resource: 'bricks',
    cost: 0,
    description: '+2 Bricks<br/>+2 Gems<br/>Play again',
    play: function(match) {
      match.me().bricks += 2;
      match.me().gems += 2;
    }
  },

  'Friendly Terrain': {
    resource: 'bricks',
    cost: 1,
    description: '+1 Wall<br/>Play again',
    play: function(match) {
      match.me().wall += 1;
    }
  },

  'Miners': {
    resource: 'bricks',
    cost: 3,
    description: '+1 Quarry',
    play: function(match) {
      match.me().quarry += 1;
      match.nextPlayer();
    }
  }

};
