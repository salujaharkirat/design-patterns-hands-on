export interface IElevatorStrategy {
  getNextFloor(currentFloor: number, requests: number[], direction: 'up' | 'down' | 'idle'): number | null;
}