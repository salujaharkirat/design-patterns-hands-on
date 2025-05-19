import type { Position } from "./constants";
import type { FlyWeight } from "./flyweight";

export class ChessPiece {
  constructor(
    private flyweight: FlyWeight,
    private position: Position,
  ) {}

  display () {
    return this.flyweight.display(this.position);
  }
}