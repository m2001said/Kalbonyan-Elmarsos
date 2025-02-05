'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//solution

// 1
const [player1, player2] = game.players;
// console.log(player1, player2);

//2
const [gk, ...fieldPlayers] = player1;

// 3
const allPlayers = [...player1, ...player2];

//4
const playersFinal = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

//5
const {
  odds: { team1, x: draw, team2 },
} = game;

//6
const printGoals = function (...players) {
  console.log(`${players}`);
  console.log(`${players.length} goals were scored`);
};

printGoals(game.score);
printGoals(game.player1);

//7
team1 < team2 && console.log('team1 wins');
team1 > team2 && console.log('team2 wins');
