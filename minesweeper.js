const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  var board = [];
  for (var i = 0; i < numberOfRows; i++) {
    var row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  var board = [];
  for (var i = 0; i < numberOfRows; i++) {
    var row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }
  var numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex =  Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex =  Math.floor(Math.random() * numberOfColumns);

    board[randomRowIndex, randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    //bombs can be placed where there is another bomb. will fix this later
  }



return board;

};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')));

};

var playerBoard = generatePlayerBoard(3,4);
var bombBoard = generateBombBoard(3,4,5);




console.log('Player Board: ' + printBoard(playerBoard));
console.log('Bomb Board: ' + printBoard(bombBoard));
