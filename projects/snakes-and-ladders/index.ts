import { GameManager } from "./game-manager";

const gameManager = new GameManager();

gameManager.startNewGame([
  "Tithi",
  "Kirat",
]);

gameManager.play();