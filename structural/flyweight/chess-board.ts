import { ChessPiece } from "./chess-piece";
import type { Color, PieceType, Position } from "./constants";
import { FlyWeightFactory } from "./flyweight-factory";

export class ChessBoard {
  private flyweightFactory = new FlyWeightFactory();
  private pieces: ChessPiece[] = [];

  addPiece(type: PieceType, color: Color, position: Position) {
    const flyweight = this.flyweightFactory.addFlyweight(type, color);
    this.pieces.push(new ChessPiece(flyweight, position));
  }

  displayBoard () {
    console.log(`Board has ${this.pieces.length} pieces`);
    console.log(`Using only ${this.flyweightFactory.getCount()} flyweights`);
    this.pieces.forEach((p) => console.log(p.display()));
  }
}