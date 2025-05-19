import type { Command } from "./command";

export class MoveCommand implements Command {
  execute () {
    console.log("executing move command");
  }

  undo () {
    console.log("undoing move command");
  }
}