import type { IVehicle } from "./vehicle";
import { VehicleFactory } from "./vehicle-factory";

function main() {
  const car: IVehicle = VehicleFactory.getVehicle("car");
  const truck: IVehicle = VehicleFactory.getVehicle("truck");
}

main();