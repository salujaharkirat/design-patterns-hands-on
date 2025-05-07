import { ElevatorDecorator } from "./elevator-decorator";

export class EmergencyBrakeDecorator extends ElevatorDecorator {
  engageBrakes() {
    console.log("engaging brakes");
  }
}