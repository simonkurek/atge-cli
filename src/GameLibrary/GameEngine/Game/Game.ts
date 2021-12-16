import Scenario from 'GameLibrary/GameEngine/Game/Scenario';

class Game {
  private gameID: string;
  private fullName: string;
  private description: string;
  private creator: string;
  private version: string;
  private scenarios: Scenario[];

  constructor(
    gameID: string,
    fullName: string,
    description: string,
    creator: string,
    version: string,
    scenarios: Scenario[],
  ) {
    this.gameID = gameID;
    this.fullName = fullName;
    this.description = description;
    this.creator = creator;
    this.version = version;
    this.scenarios = scenarios;
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

  public getScenarios(): Scenario[] {
    return this.scenarios;
  }
}

export default Game;
