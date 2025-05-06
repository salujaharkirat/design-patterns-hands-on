export interface ElevatorObserver {
  update(currentFlow: number, direction: 'up'| 'down' | 'idle'): void;
}