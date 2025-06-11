export class Player {
  private playerName: string;
  private position: number = 0;

  constructor (playerName: string) {
    this.playerName = playerName;
  }

  getName () {
    return this.playerName;
  }

  getPosition () {
    return this.position;
  }

  setPosition(position: number) {
    this.position = position;
  }
}