import type { ElevatorObserver } from "./elevator-observer";

export class DirectionIndicator implements ElevatorObserver {
  private elevatorId: string;

  constructor(elevatorId: string) {
    this.elevatorId = elevatorId;
  }

  update(currentFloor: number, direction: 'up' | 'down' | 'idle'): void {
    if (direction === 'up') {
      console.log(`[${this.elevatorId}] Direction: ▲`);
    } else if (direction === 'down') {
      console.log(`[${this.elevatorId}] Direction: ▼`);
    } else {
      console.log(`[${this.elevatorId}] Direction: ● (Idle)`);
    }
  }
}