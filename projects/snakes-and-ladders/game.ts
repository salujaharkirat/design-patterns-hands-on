import { Board } from "./board";
import { Dice } from "./dice";
import { Player } from "./player";

export class Game {
  private players: Array<Player> = [];
  private currentPlayerIndex: number;
  private dice: Dice;
  private board: Board;

  constructor (playerNames: Array<string>) {
    this.board = new Board();
    this.dice = new Dice();
    this.currentPlayerIndex = 0;

    playerNames.forEach((playerName) => {
      this.players.push(new Player(playerName));
    });
  }

  play () {
    while (!this.isGameOver()) {
      const currentPosition = this.players[this.currentPlayerIndex]?.getPosition() || 0;
      const diceRoll = this.dice.getRoll();
      const newPosition = currentPosition + diceRoll;

      if (newPosition <= this.board.getSize()) {
        const currentPlayer = this.players[this.currentPlayerIndex];
        currentPlayer?.setPosition(this.board.getNextPositionAfterObstacles(newPosition));
        console.log(`Moving player ${this.currentPlayerIndex + 1} from position ${currentPosition} to ${currentPlayer?.getPosition()}`);
      }

      if (newPosition == this.board.getSize()) {
        console.log(`Player ${this.players[this.currentPlayerIndex]?.getName()} wins`);
        break;
      }

      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }
  }

  isGameOver() {
    this.players.forEach((player) => {
      if (player.getPosition() == this.board.getSize()) {
        return true;
      }
    });
    return false;
  }
}