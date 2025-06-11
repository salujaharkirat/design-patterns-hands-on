import { Ladder } from "./obstacle/ladder";
import type { Obstacle } from "./obstacle/obstacle";
import { Snake } from "./obstacle/snake";

export class Board {
  private size: number = 100;
  private snakes: Array<Obstacle> = [];
  private ladders: Array<Obstacle> = [];

  constructor() {
    this.init();
  }

  init () {
    this.snakes.push(new Snake(28,9));
    this.snakes.push(new Snake(32,5));
    this.snakes.push(new Snake(45,12));
    this.snakes.push(new Snake(99,1));
    this.snakes.push(new Snake(98,3));
    this.snakes.push(new Snake(90,10));

    this.ladders.push(new Ladder(10,30));
    this.ladders.push(new Ladder(41,90));

  }

  getSize() {
    return this.size;
  }

  getSnakes() {
    return this.snakes;
  }

  getLadders () {
    return this.ladders;
  }

  getNextPositionAfterObstacles (position: number) {
    this.snakes.forEach((snake) => {
      if (snake.getStart() == position) {
        return snake.getEnd();
      }
    });

    this.ladders.forEach((ladder) => {
      if (ladder.getStart() == position) {
        return ladder.getEnd();
      }
    });
    return position;
  }
}