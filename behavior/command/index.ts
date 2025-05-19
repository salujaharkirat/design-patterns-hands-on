import { CastleCommand } from "./castle-command";
import { ChessGame } from "./chess-game";
import { MoveCommand } from "./move-command";

const chessGame = new ChessGame();

const move1 = new MoveCommand();
chessGame.executeCommand(move1);

const move2 = new CastleCommand();
chessGame.executeCommand(move2);

const move3 = new MoveCommand();
const move4 = new MoveCommand();
const move5 = new MoveCommand();

chessGame.queueCommand(move3);
chessGame.queueCommand(move4);
chessGame.queueCommand(move5);

chessGame.executeCommandsInQueue();