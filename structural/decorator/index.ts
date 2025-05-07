import { EmergencyBrakeDecorator } from "./emergency-brake-decorator";
import { StandardElevator } from "./standard-elevator";
import { VipDecorator } from "./vip-decorator";

const standardElevator = new StandardElevator();
console.log(standardElevator.getCurrentFloor());

const emergencyBrakeElevator = new EmergencyBrakeDecorator(standardElevator);
emergencyBrakeElevator.engageBrakes();

const vipElevator = new VipDecorator(standardElevator);
vipElevator.authorizeUser();