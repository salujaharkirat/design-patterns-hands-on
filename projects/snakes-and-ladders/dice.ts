export class Dice {
  private maxValue: number = 6;
  private minValue: number = 1;

  getRoll () {
    return Math.floor(Math.random() * (this.maxValue - this.minValue + 1) + this.minValue);
  }
}