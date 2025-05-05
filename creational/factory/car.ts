import type { IVehicle } from "./vehicle";

export class Car implements IVehicle {
  constructor() {
    console.log("creating car...");
  }
}