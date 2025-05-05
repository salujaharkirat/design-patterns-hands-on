import type { IVehicle } from "./vehicle";

export class Truck implements IVehicle {
  constructor() {
    console.log("creating truck...");
  }
}