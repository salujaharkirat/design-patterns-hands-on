import { Car } from "./car";
import { Truck } from "./truck";

export class VehicleFactory {
  public static getVehicle(type: string) {
    switch (type.toLowerCase()) {
      case 'car':
        return new Car();
      case 'truck':
        return new Truck();
      default:
        throw new Error(`Vehicle type ${type} not supported`);
    }
  }
}