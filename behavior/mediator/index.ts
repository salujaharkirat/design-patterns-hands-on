import { Board } from "./board";
import { ChessController } from "./chess-controller";
import { Logger } from "./logger";
import { Player } from "./player";

const board = new Board();
const logger = new Logger();
const chessController = new ChessController(board, logger);
const player1 = new Player("Kirat", chessController);
player1.makeMove();