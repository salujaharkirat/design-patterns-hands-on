import { Game } from "./game";
import type { Player } from "./player";

export class GameManager {
  private static instance: GameManager;
  private games: Array<Game> = [];

  constructor() {
    if (GameManager.instance) {
        return GameManager.instance;
    }
    GameManager.instance = this;
  }

  startNewGame (playerNames: Array<string>) {
    this.games.push(new Game(playerNames));
  }

  play() {
    this.games.forEach((game) => game.play())
  }
}