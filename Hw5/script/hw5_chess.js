

function Elem(teg){ 
  this.teg = teg;
  var e = document.createElement(this.teg);
  this.documentInsert = function(parr){
     return this.elem = parr.appendChild(e);
  }
}

var chessBoard = {
  cell: [],
  col: [],
  lines: ['8', '7', '6', '5', '4', '3', '2', '1', ' '],
  columns: [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
}

var tableChess = new Elem('table');
tableChess.documentInsert(document.body);
tableChess.elem.classList = 'table-chessBoard';

for (var i=0; i<9; i++) {
  chessBoard.cell[i] = new Elem('tr');
  chessBoard.cell[i].documentInsert(tableChess.elem);  
    for (var j=0; j<9; j++) {
      chessBoard.col[j] = new Elem('td');
      chessBoard.col[j].documentInsert(chessBoard.cell[i].elem); 
      chessBoard.col[j].elem.classList = 'cell-field';
      
      if (i==8) {
        chessBoard.col[j].elem.innerHTML = chessBoard.columns[j]; 
        chessBoard.col[j].elem.classList.add('columns');
      }
      if ((i!=8 && i%2==0 && j%2==0 && j!=0)||(i%2!=0 && j%2!=0 && j!=0)) chessBoard.col[j].elem.classList.add('black');
  chessBoard.col[0].elem.innerHTML = chessBoard.lines[i]; 
  chessBoard.col[0].elem.classList.add('lines');
}