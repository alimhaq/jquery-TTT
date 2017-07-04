const View = require ('./ttt-view');
const Game = require ('/Users/appacademy/Downloads/solution/game');

$( () => {
  const game = new Game();
  const $el = $(".ttt");
  new View(game, $el);



});
