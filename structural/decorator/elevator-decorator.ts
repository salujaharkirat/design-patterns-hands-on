import type { IElevator } from "./elevator";

export abstract class ElevatorDecorator implements IElevator {
  protected component: IElevator;

  constructor(component: IElevator) {
    this.component = component;
  }
  
  getCurrentFloor(): number {
    return this.component.getCurrentFloor();
  }
}