'use strict';

module.exports = {
  'Quartz': {
    resource: 'gems',
    cost: 1,
    description: '+1 Tower, <br/> play again',
    play: function(match) {
      match.me().tower += 1;
    }
  },

  'Smoky Quartz': {
    resource: 'gems',
    cost: 2,
    description: '1 Damage to<br/> enemy tower<br/>play again',
    play: function(match) {
      match.him().tower -= 1;
    }
  },

  'Amethyst': {
    resource: 'gems',
    cost: 2,
    description: '+3 Tower',
    play: function(match) {
      match.me().tower +=3;
      match.nextPlayer();
    }
  },

  'Spell Weavers': {
    resource: 'gems',
    cost: 3,
    description: '+1 Magic',
    play: function(match) {
      match.me().magic += 1;
      match.nextPlayer();
    }
  },

  'Prism': {
    resource: 'gems',
    cost: 2,
    description: 'Draw 1 card<br/>Discard 1 card<br/>Play again',
    play: function(match) {
      //TODO
    }
  },

  'Lodestone': {
    resource: 'gems',
    cost: 5,
    description: '+3 Tower. This<br/>card can\'t be dis-<br/>carted without playing it' ,
    play: function(match) {
      match.me().tower += 3;
      //TODO
      match.nextPlayer();
    }
  },

  'Solar Flare': {
    resource: 'gems',
    cost: 4,
    description: '+2 Tower<br>2 Damage to<br/>enemy tower',
    play: function(match) {
      match.me().tower += 2;
      match.him().tower -= 2;
      match.nextPlayer();
    }
  },

  'Crystal Matrix': {
    resource: 'gems',
    cost: 6,
    description: '1 Magic<br/>+3 Tower<br/>+1 enemy<br/>tower',
    play: function(match) {
      match.me().magic += 1;
      match.me().tower += 3;
      match.him().tower += 1;
      match.nextPlayer();
    }
  },

  'GemstoneFlaw': {
    resource: 'gems',
    cost: 2,
    description: '3 Damage to<br/>enemy tower',
    play: function(match) {
      match.him().tower -= 3;
      match.nextPlayer();
    }
  },

  'Ruby': {
    resource: 'gems',
    cost: 3,
    description: '+5 Tower',
    play: function(match) {
      match.me().tower += 5;
      match.nextPlayer();
    }
  },

  'Gem Spear': {
    resource: 'gems',
    cost: 4,
    description: '5 Damage<br/>toenemy tower',
    play: function(match) {
      match.him().tower -= 5;
      match.nextPlayer();
    }
  },

  'Power Burn': {
    resource: 'gems',
    cost: 3,
    description: '5 Damage<br/>to your tower<br/>+2 Magic',
    play: function(match) {
      match.me().tower -= 5;
      match.me().magic += 2;
      match.nextPlayer();
    }
  },

  'Harmonic Vibe': {
    resource: 'gems',
    cost: 7,
    description: '+1 Magic<br/>+3 Tower<br/>+3 Wall',
    play: function(match) {
      match.me().magic += 1;
      match.me().tower += 3;
      match.me().wall += 3;
      match.nextPlayer();
    }
  },

  'Parity': {
    resource: 'gems',
    cost: 7,
    description: 'All player\'s<br/>magic equals<br/>the highest<br/>player\'s magic',
    play: function(match) {
      //TODO
      match.nextPlayer();
    }
  },

  'Emerald': {
    resource: 'gems',
    cost: 6,
    description: '+8 Tower',
    play: function(match) {
      match.me().tower += 3;
      match.nextPlayer();
    }
  },

  'Pearl of Wisdom': {
    resource: 'gems',
    cost: 9,
    description: '+5 Tower<br/>+1 Magic',
    play: function(match) {
      match.me().tower += 5;
      match.me().magic += 1;
      match.nextPlayer();
    }
  },

  'Shatterer': {
    resource: 'gems',
    cost: 8,
    description: '-1 Magic<br/>9 Damage to<br/>enemy tower',
    play: function(match) {
      match.me().magic -= 1;
      match.him().tower -= 9;
      match.nextPlayer();
    }
  },

  'Crumblestone': {
    resource: 'gems',
    cost: 7,
    description: '+5 Tower<br/>enemy loses<br/>6 bricks',
    play: function(match) {
      match.me().tower += 5;
      match.him().bricks -= 6;
      match.nextPlayer();
    }
  },

  'Sapphire': {
    resource: 'gems',
    cost: 10,
    description: '+11 Tower',
    play: function(match) {
      match.me().tower += 11;
      match.nextPlayer();
    }
  },

  'Discord': {
    resource: 'gems',
    cost: 5,
    description: '7 Damage to<br/>all tower, all<br/>player\'s magic<br/>-1',
    play: function(match) {
      match.me().tower -= 7;
      match.him().tower -= 7;
      match.me().magic -= 1;
      match.him().magic -= 1;
      match.nextPlayer();
    }
  },

  'Quarry\'s Help': {
    resource: 'gems',
    cost: 4,
    description: '+7 Tower<br/>Lose 10<br/>bricks',
    play: function(match) {
      match.me().tower += 7;
      match.me().bricks -= 10;
      match.nextPlayer();
    }
  },

  'Crystal Shield': {
    resource: 'gems',
    cost: 12,
    description: '+8 Tower<br/>+3 Wall',
    play: function(match) {
      match.me().tower += 8;
      match.me().wall += 3;
      match.nextPlayer();
    }
  },

  'Empathy Gem': {
    resource: 'gems',
    cost: 14,
    description: '+8 Tower<br/>+1 Dungeon',
    play: function(match) {
      match.me().tower += 8;
      match.me().dungeon += 1;
      match.nextPlayer();
    }
  },

  'Diamond': {
    resource: 'gems',
    cost: 16,
    description: '+15 Tower',
    play: function(match) {
      match.me().tower += 15;
      match.nextPlayer();
    }
  },

  'Sunctuary': {
    resource: 'gems',
    cost: 15,
    description: '+10 Tower<br/>+5 Wall<br/>Gain 5<br/>recruits',
    play: function(match) {
      match.me().tower += 10;
      match.me().wall += 5;
      matchme().recruits += 5;
      match.nextPlayer();
    }
  },

  'Lava Jewel': {
    resource: 'gems',
    cost: 17,
    description: '+12 Tower<br/>6 Damage to<br/>all enemies',
    play: function(match) {
      match.me().tower += 12;
      //TODO
      match.nextPlayer();
    }
  },

  'Dragon\'s Eye': {
    resource: 'gems',
    cost: 21,
    description: '+20 Tower',
    play: function(match) {
      match.me().tower += 20
      match.nextPlayer();
    }
  },

  'Crystalize': {
    resource: 'gems',
    cost: 8,
    description: '+11 Tower<br/>-6 Wall',
    play: function(match) {
      match.me().tower += 11;
      match.me().wall -= 6;
      match.nextPlayer();
    }
  },

  'Bag of Baibles': {
    resource: 'gems',
    cost: 0,
    description: 'If Tower\\<<br/>enemy Tower<br/>+2 Tower, else<br/>+1 Tower',
    play: function(match) {
      //TODO
      match.nextPlayer();
    }
  },

  'Apprentice': {
    resource: 'gems',
    cost: 5,
    description: '+4 Tower, you<br/>lose 3 recruits<br/>2 damage to<br/>enemy Tower',
    play: function(match) {
      match.me().tower += 4;
      match.me().recruits -= 3;
      match.him().tower -= 2;
      match.nextPlayer();
    }
  },

  'Lightning Shard': {
    resource: 'gems',
    cost: 11,
    description: 'If Tower \\> enemy<br/> Wall, 8 damage<br/> to enemy tower,<br/>else 8 damage',
    play: function(match) {
      //TODO
      match.nextPlayer();
    }
  },

  'Phase Jewel': {
    resource: 'gems',
    cost: 18,
    description: '+13 Tower<br/>+6 recruits<br/>+6 bricks',
    play: function(match) {
      match.me().tower += 13;
      match.me().recruits += 6;
      match.me().bricks += 6;
      match.nextPlayer();
    }
  }
};