import type { IElevator } from "./elevator";

export class StandardElevator implements IElevator {
  private currentFloor: number = 1;
  getCurrentFloor(): number {
    return this.currentFloor;
  }
}