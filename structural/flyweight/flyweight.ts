import type { Color, PieceType, Position } from "./constants";

export class FlyWeight {
  constructor(
    public readonly type: PieceType, 
    public readonly color: Color) {}

  display (position: Position) {
    return `${this.color} ${this.type} at (${position.x}, ${position.y})`;
  }
}