import type { IElevatorStrategy } from "./elevator-strategy";

export class FCFSStrategy implements IElevatorStrategy {
  getNextFloor(currentFloor: number, requests: number[], direction: 'up' | 'down' | 'idle'): number | null {
    if (requests.length > 0) {
      return requests[0] || null; // Serve the requests in the order they arrived
    }
    return null;
  }
}