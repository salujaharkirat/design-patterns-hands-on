import type { Obstacle } from "./obstacle";

export class Ladder implements Obstacle {
  constructor(private start: number, private end: number) {}

  getStart() {
    return this.start;
  }

  getEnd() {
    return this.end;
  }
}