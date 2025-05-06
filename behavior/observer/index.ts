import { DirectionIndicator } from "./direction-indicator";
import { Elevator } from "./elevator";
import { FloorDisplay } from "./floor-display";
import { PassengerAnnouncement } from "./passenger-announcement";

const mainElevator = new Elevator();

const floorDisplay1 = new FloorDisplay("Elevator A");
const floorDisplay2 = new FloorDisplay("Elevator A - Lobby");
const directionIndicator1 = new DirectionIndicator("Elevator A");
const announcement1 = new PassengerAnnouncement("Elevator A");

mainElevator.registerObserver(floorDisplay1);
mainElevator.registerObserver(floorDisplay2);
mainElevator.registerObserver(directionIndicator1);
mainElevator.registerObserver(announcement1);

console.log("\n--- Elevator Moving Up ---");
mainElevator.moveToFloor(5);

console.log("\n--- Elevator Moving Down ---");
setTimeout(() => {
  mainElevator.moveToFloor(2);
}, 6000);

console.log("\n--- Removing an Observer ---");
setTimeout(() => {
  mainElevator.removeObserver(floorDisplay2);
}, 8000);

console.log("\n--- Elevator Moving Again ---");
setTimeout(() => {
  mainElevator.moveToFloor(1);
}, 10000);