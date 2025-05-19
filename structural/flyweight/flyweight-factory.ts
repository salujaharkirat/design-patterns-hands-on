import type { Color, PieceType } from "./constants";
import { FlyWeight } from "./flyweight";

export class FlyWeightFactory {
  private flyweights: { [key: string]: FlyWeight} = {};

  addFlyweight(type: PieceType, color: Color) : FlyWeight {
    const key = `${color}_${type}`;
    if (!this.flyweights[key]) {
      this.flyweights[key] = new FlyWeight(type, color);
    }
    return this.flyweights[key];
  }

  getCount(): number {
    return Object.keys(this.flyweights).length;
  }
}