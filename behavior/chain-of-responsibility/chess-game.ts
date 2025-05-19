import { CastlingHandler } from "./castling-handler";
import type { MoveHandler, MoveRequest } from "./move-handler";
import { PieceMoveHandler } from "./piece-move-handler";

export class ChessGame {
  private moveHandler: MoveHandler;
  
  constructor () {
    this.moveHandler = new PieceMoveHandler();
    this.moveHandler.setNext(new CastlingHandler());
  }

  movePiece (request: MoveRequest) {
    this.moveHandler.handle(request);
  }
}