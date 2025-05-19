export interface MoveHandler {
  setNext: (move: MoveHandler) => void;
  handle: (request: MoveRequest) => void;
}

export interface MoveRequest {
  piece: string;
  from: string;
  to: string;
}

export abstract class BaseMoveHandler implements MoveHandler {
  private nextHandler: MoveHandler | null = null;

  setNext (handler: MoveHandler) {
    this.nextHandler = handler;
    return handler;
  }

  handle (request: MoveRequest) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return true;
  } 
}