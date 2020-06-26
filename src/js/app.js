import Game, { GameSavingData, readGameSaving as loadGame, readGameSaving as saveGame } from'./game.js';


console.log('app worked')

const game = new Game();
game.start();