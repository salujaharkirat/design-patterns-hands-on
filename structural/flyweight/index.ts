import { ChessBoard } from "./chess-board";

const chessBoard = new ChessBoard();

chessBoard.addPiece("rook", "white", {x: 0, y: 0});
chessBoard.addPiece("knight", "white", {x: 1, y: 0});
chessBoard.addPiece("bishop", "white", {x: 2, y: 0});
chessBoard.addPiece("queen", "white", {x: 3, y: 0});
chessBoard.addPiece("king", "white", {x: 4, y: 0});
chessBoard.addPiece("bishop", "white", {x: 5, y: 0});
chessBoard.addPiece("knight", "white", {x: 6, y: 0});
chessBoard.addPiece("rook", "white", {x: 7, y: 0});

for (let x = 0; x < 8; x++){
  chessBoard.addPiece("pawn", "white", {x, y: 1});
}

chessBoard.addPiece("rook", "black", {x: 0, y: 7});
chessBoard.addPiece("knight", "black", {x: 1, y: 7});
chessBoard.addPiece("bishop", "black", {x: 2, y: 7});
chessBoard.addPiece("queen", "black", {x: 3, y: 7});
chessBoard.addPiece("king", "black", {x: 4, y: 7});
chessBoard.addPiece("bishop", "black", {x: 5, y: 7});
chessBoard.addPiece("knight", "black", {x: 6, y: 7});
chessBoard.addPiece("rook", "black", {x: 7, y: 7});

for (let x = 0; x < 8; x++){
  chessBoard.addPiece("pawn", "black", {x, y: 6});
}


chessBoard.displayBoard();