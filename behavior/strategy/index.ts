import { Elevator } from "./elevator";
import { FCFSStrategy } from "./fcfs-strategy";
import { SSTFStrategy } from "./sstf-strategy";

const minFloor = 1;
const maxFloor = 10;

const fcfsElevator = new Elevator(new FCFSStrategy(), minFloor, maxFloor);
const sstfElevator = new Elevator(new SSTFStrategy(), minFloor, maxFloor);

console.log("\n--- FCFS Elevator ---");
fcfsElevator.addRequest(5);
fcfsElevator.addRequest(2);
fcfsElevator.addRequest(8);
while (fcfsElevator.getRequests().length > 0) {
  fcfsElevator.processNextRequest();
}

console.log("\n--- SSTF Elevator ---");
sstfElevator.addRequest(5);
sstfElevator.addRequest(2);
sstfElevator.addRequest(8);
while (sstfElevator.getRequests().length > 0) {
  sstfElevator.processNextRequest();
}