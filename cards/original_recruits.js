'use strict';

module.exports = {

  'MadCowDisease': {
    resource: 'recruits',
    cost: 0,
    description: 'All players<br/>lose 6 recruits',
    play: function(match) {
      match.me().recruits -= 6;
      match.him().recruits -= 6;
      match.nextPlayer();
    }
  },

  'Faerie': {
    resource: 'recruits',
    cost: 1,
    description: '2 Damage<br/>Play again',
    play: function(match) {
      match.him().damage(2);
    }
  },

  'Moody Goblins': {
    resource: 'recruits',
    cost: 1,
    description: '4 Damage<br/>You lose<br/>3 gems',
    play: function(match) {
      match.him().damage(4);
      match.me().gems -= 3;
      match.nextPlayer();
    }
  },

  'Minotaur': {
    resource: 'recruits',
    cost: 3,
    description: '+1 Dungeon',
    play: function(match) {
      match.me().dungeon += 1;
      match.nextPlayer();
    }
  },

  'Elven Scout': {
    resource: 'recruits',
    cost: 2,
    description: 'Draw 1 card<br/>Discard 1 card<br/>Play again',
    play: function(match) {
      // TODO
    }
  },

  'Goblin Mob': {
    resource: 'recruits',
    cost: 3,
    description: '6 Damage<br/>You take<br/>3 damage',
    play: function(match) {
      match.him().damage(6);
      match.me().damage(3);
      match.nextPlayer();
    }
  },

  'Goblin Archers': {
    resource: 'recruits',
    cost: 4,
    description: '3 Damage to<br/>enemy tower<br/>You take 1<br/>damage',
    play: function(match) {
      match.him().damage(3, true);
      match.me().damage(1);
      match.nextPlayer();
    }
  },

  'Shadow Faerie': {
    resource: 'recruits',
    cost: 6,
    description: '2 Damage to<br/>enemy tower<br/>Play again',
    play: function(match) {
      match.him().damage(2, true);
    }
  },

  'Orc': {
    resource: 'recruits',
    cost: 3,
    description: '5 Damage',
    play: function(match) {
      match.him().damage(5);
      match.nextPlayer();
    }
  },

  'Dwarves': {
    resource: 'recruits',
    cost: 5,
    description: '4 Damage<br/>+3 Wall',
    play: function(match) {
      match.him().damage(4);
      match.me().wall += 3;
      match.nextPlayer();
    }
  },

  'Little Snakes': {
    resource: 'recruits',
    cost: 6,
    description: '4 Damage to<br/>enemy tower',
    play: function(match) {
      match.him().damage(4, true);
      match.nextPlayer();
    }
  },

  'Troll Trainer': {
    resource: 'recruits',
    cost: 7,
    description: '+2 Dungeon',
    play: function(match) {
      match.me().dungeon += 2;
      match.nextPlayer();
    }
  },

  'Tower Gremlin': {
    resource: 'recruits',
    cost: 8,
    description: '2 Damage<br/>+4 Wall<br/>+2 Tower',
    play: function(match) {
      match.him().damage(2);
      match.me().wall += 4;
      match.me().tower += 2;
      match.nextPlayer();
    }
  },

  'Full Moon': {
    resource: 'recruits',
    cost: 0,
    description: '+1 to all player\'s<br/>Dungeon<br/>You gain 3<br/>recruits',
    play: function(match) {
      match.him().dungeon += 1;
      match.me().dungeon += 1;
      match.me().recruits += 3;
      match.nextPlayer();
    }
  },

  'Slasher': {
    resource: 'recruits',
    cost: 5,
    description: '6 Damage',
    play: function(match) {
      match.him().damage(6);
      match.nextPlayer();
    }
  },

  'Ogre': {
    resource: 'recruits',
    cost: 6,
    description: '7 Damage',
    play: function(match) {
      match.him().damage(7);
      match.nextPlayer();
    }
  },

  'Rabid Sheep': {
    resource: 'recruits',
    cost: 6,
    description: '6 Damage<br/>Enemy loses<br/>3 recruits',
    play: function(match) {
      match.him().damage(6);
      match.him().recruits -= 3;
      match.nextPlayer();
    }
  },

  'Imp': {
    resource: 'recruits',
    cost: 5,
    description: '6 Damage. All<br/>players lose 5<br/>bricks, gems<br/>and recruits',
    play: function(match) {
      match.him().damage(6);
      match.me().recruits -= 5;
      match.him().recruits -= 5;
      match.me().gems -= 5;
      match.him().gems -= 5;
      match.me().bricks -= 5;
      match.him().bricks -= 5;
      match.nextPlayer();
    }
  },

  'Spizzer': {
    resource: 'recruits',
    cost: 8,
    description: 'If enemy Wall<br/>= 0, 10 damage, else 6 damage',
    play: function(match) {
      var dmg;
      if (match.him().wall == 0)
        dmg = 10;
      else dmg = 6;
      match.him().damage(dmg);
      match.nextPlayer();
    }
  },

  'Werewolf': {
    resource: 'recruits',
    cost: 9,
    description: '9 Damage',
    play: function(match) {
      match.him().damage(9);
      match.nextPlayer();
    }
  },

  'Corrosion Cloud': {
    resource: 'recruits',
    cost: 11,
    description: 'If enemy Wall > 0,<br/>10 damage, else<br/>7 damage',
    play: function(match) {
      var dmg;
      if (match.him().wall > 0)
        dmg = 10;
      else dmg = 7;
      match.him().damage(dmg);
      match.nextPlayer();
    }
  },

  'Unicorn': {
    resource: 'recruits',
    cost: 9,
    description: 'If magic > enemy<br/>magic, 12 damage<br/>, else 8 damage',
    play: function(match) {
      var dmg;
      if (match.me().magic > match.him().magic)
        dmg = 12;
      else dmg = 8;
      match.him().damage(dmg);
      match.nextPlayer();
    }
  },

  'Elven Archers': {
    resource: 'recruits',
    cost: 10,
    description: 'If Wall > enemy<br/>Wall, 6 damage<br/>to enemy tower, else 6 damage',
    play: function(match) {
      if (match.me().wall > match.him().wall)
        match.him().damage(6, true);
      else match.him().damage(6);
      match.nextPlayer();
    }
  },

  'Succubus': {
    resource: 'recruits',
    cost: 14,
    description: '5 damage to<br/>enemy tower, enemy loses<br/>8 recruits',
    play: function(match) {
      match.him().damage(5, true);
      match.him().recruits -= 8;
      match.nextPlayer();
    }
  },

  'Rock Stompers': {
    resource: 'recruits',
    cost: 11,
    description: '8 Damage to<br/>-1 Enemy quarry',
    play: function(match) {
      match.him().damage(8);
      match.him().quarry -= 1;
      match.nextPlayer();
    }
  },

  'Thief': {
    resource: 'recruits',
    cost: 12,
    description: 'Enemy loses 10<br/>gems, 5 bricks,<br/>you gain 1/2 amt.<br/>round up',
    play: function(match) {
      match.him().gems -= 10;
      match.him().bricks -= 5;
      // Todo check it
      match.me().gems += 5;
      match.me().bricks += 3;
      match.nextPlayer();
    }
  },

  'Stone Giant': {
    resource: 'recruits',
    cost: 15,
    description: '10 Damage,<br/>+4 Wall',
    play: function(match) {
      match.him().damage(10);
      match.me().wall += 4;
      match.nextPlayer();
    }
  },

  'Vampire': {
    resource: 'recruits',
    cost: 17,
    description: '10 Damage<br/>Enemy loses 5<br/>recruits, -1 enemy Dungeion',
    play: function(match) {
      match.him().damage(10);
      match.him().recruits -= 5;
      match.him().dungeon -= 1;
      match.nextPlayer();
    }
  },

  'Dragon': {
    resource: 'recruits',
    cost: 25,
    description: '20 Damage<br/>Enemy loses 10<br/>gems, -1 enemy Dungeion',
    play: function(match) {
      match.him().damage(20);
      match.him().gems -= 10;
      match.him().dungeon -= 1;
      match.nextPlayer();
    }
  },

  'Spearman': {
    resource: 'recruits',
    cost: 2,
    description: 'If Wall > enemy<br/>Wall do 3<br/>Damage else<br/>do 2 Damage',
    play: function(match) {
      var dmg;
      if (match.me().wall > match.him().wall)
        dmg = 3;
      else dmg = 2;
      match.him().damage(dmg);
      match.nextPlayer();
    }
  },

  'Gnome': {
    resource: 'recruits',
    cost: 2,
    description: '3 Damage<br/>+1 gem',
    play: function(match) {
      match.him().damage(3);
      match.me().gems += 1;
      match.nextPlayer();
    }
  },

  'Berserker': {
    resource: 'recruits',
    cost: 4,
    description: '8 Damage<br/>3 Damage to<br/>your Tower',
    play: function(match) {
      match.him().damage(8);
      match.me().damage(3, true);
      match.nextPlayer();
    }
  },

  'Warlord': {
    resource: 'recruits',
    cost: 13,
    description: '13 Damage<br/>You lose 3 gems',
    play: function(match) {
      match.him().damage(13);
      match.me().gems -= 3;
      match.nextPlayer();
    }
  },

  'Pegasus Lancer': {
    resource: 'recruits',
    cost: 18,
    description: '12 Damage to<br/>enemy tower',
    play: function(match) {
      match.him().damage(12, true);
      match.nextPlayer();
    }
  }
};
