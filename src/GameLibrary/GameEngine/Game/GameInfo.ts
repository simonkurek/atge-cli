class GameInfo {
  private gameID: string;
  private fullName: string;
  private description: string;
  private creator: string;
  private version: string;

  constructor(
    gameID: string,
    fullName: string,
    description: string,
    creator: string,
    version: string,
  ) {
    this.gameID = gameID;
    this.fullName = fullName;
    this.description = description;
    this.creator = creator;
    this.version = version;
  }

  public getGameID(): string {
    return this.gameID;
  }

  public getFullName(): string {
    return this.fullName;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCreator(): string {
    return this.creator;
  }

  public getVersion(): string {
    return this.version;
  }
}

export default GameInfo;
