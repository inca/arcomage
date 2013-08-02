'use strict';

module.exports = {

  'Brick Shortage': {
    resource: 'bricks',
    cost: 0,
    description: 'All players<br/>lose 8 bricks',
    play: function(me, him, match) {
      me.bricks -= 8;
      him.bricks -= 8;
      return true;
    }
  },

  'Lucky Cache': {
    resource: 'bricks',
    cost: 0,
    description: '+2 Bricks<br/>+2 Gems<br/>Play again',
    play: function(me, him, match) {
      me.bricks += 2;
      me.gems += 2;
      return false;
    }
  },

  'Friendly Terrain': {
    resource: 'bricks',
    cost: 1,
    description: '+1 Wall<br/>Play again',
    play: function(me, him, match) {
      me.wall += 1;
      return false;
    }
  },

  'Miners': {
    resource: 'bricks',
    cost: 3,
    description: '+1 Quarry',
    play: function(me, him, match) {
      me.quarry += 1;
      return true;
    }
  }

};
