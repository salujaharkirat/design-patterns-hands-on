import { ElevatorDecorator } from "./elevator-decorator";

export class VipDecorator extends ElevatorDecorator {
  authorizeUser() {
    console.log("authorizing user");
  }
}