import type { ElevatorObserver } from "./elevator-observer";
import type { ElevatorSubject } from "./elevator-subject";

export class Elevator implements ElevatorSubject {
  private observers: ElevatorObserver[] = [];
  private currentFloor: number = 1;
  private direction: 'up' | 'down' | 'idle' = 'idle';

  registerObserver(observer: ElevatorObserver) {
    this.observers.push(observer);
    console.log("Observer registered");
  }

  removeObserver(observer: ElevatorObserver): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
    console.log("Observer removed");
  }

  notifyObservers(): void {
    for(const observer of this.observers) {
      observer.update(this.currentFloor, this.direction);
    }
  }

  moveToFloor(floor: number): void {
    if (floor > this.currentFloor) {
      this.direction = 'up';
    } else if (floor < this.currentFloor) {
      this.direction = 'down';
    } else {
      this.direction = 'idle';
      this.notifyObservers();
      return;
    }

    console.log(`Elevator moving ${this.direction} to floor ${floor}`);
    setTimeout(() => {
      this.currentFloor = floor;
      this.direction = 'idle';
      console.log(`Elevator react floor ${this.currentFloor}`);
      this.notifyObservers();
    }, Math.abs(floor - this.currentFloor), 1000);
  }

  getCurrentFloor(): number {
    return this.currentFloor;
  }

  getDirection(): string {
    return this.direction;
  }
}