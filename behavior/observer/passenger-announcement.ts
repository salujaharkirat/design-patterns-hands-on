import type { ElevatorObserver } from "./elevator-observer";

export class PassengerAnnouncement implements ElevatorObserver {
  private elevatorId: string;

  constructor(elevatorId: string) {
    this.elevatorId = elevatorId;
  }

  update(currentFloor: number, direction: 'up' | 'down' | 'idle'): void {
    if (direction === 'idle') {
      console.log(`[${this.elevatorId}] Arrived at floor ${currentFloor}. Doors opening.`);
    } else if (direction === 'up') {
      console.log(`[${this.elevatorId}] Moving up...`);
    } else if (direction === 'down') {
      console.log(`[${this.elevatorId}] Moving down...`);
    }
  }
}