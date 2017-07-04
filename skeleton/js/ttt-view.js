class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents($li) {

      $li.on("click", event => {
        this.makeMove($li);
      });

  }

  makeMove($square) {
    const player = this.game.currentPlayer;
    $square.addClass(player);

  }



  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("group"); // why? because we want to make the borders nice and solid

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $li = $("<li class='cell'>");

        $li.data("pos", [rowIdx, colIdx]);
        this.bindEvents($li);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
