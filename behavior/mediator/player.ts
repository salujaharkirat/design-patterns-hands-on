import type { Mediator } from "./mediator";

export class Player {
  private mediator: Mediator;
  private name: string;
  
  constructor (name: string, mediator: Mediator) {
    this.mediator = mediator;
    this.name = name;
  }
  
  makeMove () {
    this.mediator.onMoveMade();
  }

  getName () {
    return this.name;
  }
}