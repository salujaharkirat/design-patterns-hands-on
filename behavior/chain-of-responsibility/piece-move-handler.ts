import { BaseMoveHandler, type MoveRequest } from "./move-handler";

export class PieceMoveHandler extends BaseMoveHandler {
  handle(request: MoveRequest) {
    console.log("Handling piece movement");
    super.handle(request);
  }
}