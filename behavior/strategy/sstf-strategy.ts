import type { IElevatorStrategy } from "./elevator-strategy";

export class SSTFStrategy implements IElevatorStrategy {
  getNextFloor(currentFloor: number, requests: number[], direction: 'up' | 'down' | 'idle'): number | null {
    if (requests.length === 0) {
      return null;
    }

    let shortestDistance = Infinity;
    let nextFloor = null;
    let nextIndex = -1;

    for (let i = 0; i < requests.length; i++) {
      const distance = Math.abs((requests[i] || 0) - currentFloor);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        nextFloor = requests[i];
        nextIndex = i;
      }
    }

    // Remove the selected request to avoid serving it again immediately
    if (nextIndex !== -1) {
      requests.splice(nextIndex, 1);
    }

    return nextFloor || null;
  }
}