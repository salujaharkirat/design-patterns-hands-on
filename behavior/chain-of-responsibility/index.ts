import { ChessGame } from "./chess-game";
import type { MoveRequest } from "./move-handler";

const chessGame = new ChessGame();
const moveRequest: MoveRequest = {
  from: "",
  to: "",
  piece: "",
}

chessGame.movePiece(moveRequest);