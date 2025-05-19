import { BaseMoveHandler, type MoveRequest } from "./move-handler";

export class CastlingHandler extends BaseMoveHandler {
  handle(request: MoveRequest) {
    console.log("Castling piece");
    super.handle(request);
  }
}