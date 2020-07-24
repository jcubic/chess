function Game() {
    this._chess = new Chess();
    this._pieces = {
        K: '♔',
        Q: '♕',
        R: '♖',
        B: '♗',
        N: '♘',
        P: '♙',

        k: '♚',
        q: '♛',
        r: '♜',
        b: '♝',
        n: '♞',
        p: '♟'
    };
}
// ---------------------------------------------------------------------------
Game.prototype.getFigure = function(i, j) {
    var light = (i + j) % 2 === 0;
    var node = this._board[i][j];
    if (node === null) {
        return ' ';
    }
    var white = node.color === 'w';
    var pice = node.type;
    if (white) {
        if (light) {
            pice = this._pieces[pice.toUpperCase()];
        } else {
            pice = this._pieces[pice];
        }
    } else {
        if (light) {
            pice = this._pieces[pice];
        } else {
            pice = this._pieces[pice.toUpperCase()];
        }
    }
    return pice;
};
// ---------------------------------------------------------------------------
Game.prototype.render = function() {
    var alpha = '  ' + new Array(8).fill(0).map((_, i) => String.fromCharCode(i + 97)).join('');
    this._board = this._chess.board();
    return alpha + '\n' + this._board.map((row, i) => {
        var y = (8 - i);
        row = row.map((pice, j) => {
            return this.renderFigure(i, j);
        }).join('');
        return y + row + y;
    }).join('\n') + '\n' + alpha;
};
// ---------------------------------------------------------------------------
Game.prototype.renderFigure = function(i, j) {
    var light = (i + j) % 2 === 0;
    var pice = this.getFigure(i, j);

    if (light) {
        return '<l>' + pice + '</l>';
    }
    return '<d>' + pice + '</d>';
};
// ---------------------------------------------------------------------------


