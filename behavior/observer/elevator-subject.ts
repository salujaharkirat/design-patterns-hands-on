import type { ElevatorObserver } from "./elevator-observer";

export interface ElevatorSubject {
  registerObserver(observer: ElevatorObserver): void;
  removeObserver(observer: ElevatorObserver): void;
  notifyObservers(): void;
}