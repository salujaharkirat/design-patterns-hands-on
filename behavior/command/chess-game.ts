import type { Command } from "./command";

export class ChessGame {
  private moves: Command[] = [];
  private commandHistory: Command[] = [];

  executeCommand (command: Command) {
    command.execute();
    this.commandHistory.push(command);
  }

  queueCommand(command: Command) {
    this.moves.push(command);
    console.log(`Queued: ${command.toString()}`)
  }

  executeCommandsInQueue() {
    while (this.moves.length > 0) {
      const cmd = this.moves.shift();
      if (!cmd) {
        continue;
      }
      this.executeCommand(cmd);
    }
  }
  
  undo() {
    const cmd = this.commandHistory.pop();
    if (cmd) {
      cmd.undo();
    }
  }
}