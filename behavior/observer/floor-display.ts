import type { ElevatorObserver } from "./elevator-observer";

export class FloorDisplay implements ElevatorObserver {
  private elevatorId: string;
  
  constructor(elevatorId: string) {
    this.elevatorId = elevatorId;
  }

  update(currentFloor: number, direction: 'up' | 'down' |'idle'): void {
    console.log(`[${this.elevatorId}] Current Floor: ${currentFloor}, Direction: ${direction}`);
  }
}