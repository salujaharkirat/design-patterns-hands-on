import type { IElevatorStrategy } from "./elevator-strategy";

export class Elevator {
  private strategy: IElevatorStrategy;
  private minFloor: number;
  private currentFloor: number = 1;
  private maxFloor: number;
  private requests: number[] = [];
  private direction: 'up' | 'down' | 'idle' = 'idle';


  constructor(strategy: IElevatorStrategy, minFloor: number, maxFloor: number) {
    this.strategy = strategy;
    this.maxFloor = maxFloor;
    this.minFloor = minFloor;
  }

  setStrategy(strategy: IElevatorStrategy) {
    this.strategy = strategy;
  }

  addRequest(floor: number): void {
    if (floor >= this.minFloor && floor <= this.maxFloor && !this.requests.includes(floor)) {
      this.requests.push(floor);
      console.log(`Request added for floor ${floor}. Current requests: ${this.requests}`);
    }
  }

  processNextRequest() {
    const nextFloor = this.strategy.getNextFloor(this.currentFloor, this.requests, this.direction);
    if (nextFloor == null) {
      this.direction = 'idle';
      console.log("No more requests.");
      return
    }

    if (nextFloor > this.currentFloor) {
      this.direction = 'up';
    } else if (nextFloor < this.currentFloor) {
      this.direction = 'down';
    } else {
      this.direction = 'idle';
    }

    this.currentFloor = nextFloor;
    this.requests = this.requests.filter(req => req !== nextFloor);
    console.log(`Elevator moving to floor ${this.currentFloor}. Direction: ${this.direction}. Remaining requests: ${this.requests}`);
    return this.currentFloor;
  }

  getRequests() {
    return this.requests;
  }
}