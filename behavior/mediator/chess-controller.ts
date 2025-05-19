import type { Board } from "./board";
import type { Logger } from "./logger";
import type { Mediator } from "./mediator";

export class ChessController implements Mediator {
  private board: Board;
  private logger: Logger;
  
  constructor (board: Board, logger: Logger) {
    this.board = board;
    this.logger = logger;
  }

  onMoveMade () {
    this.board.applyMove();
    this.logger.logMove();
  }
}