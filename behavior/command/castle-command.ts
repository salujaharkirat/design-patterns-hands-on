import type { Command } from "./command";

export class CastleCommand implements Command {
  execute() {
    console.log("executing castle command");
  }

  undo () {
    console.log("undoing castle command");
  }
}