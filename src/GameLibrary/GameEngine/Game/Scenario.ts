import Command from 'GameLibrary/GameEngine/Game/Command';
import ScenarioOption from 'GameLibrary/GameEngine/Game/ScenarioOption';

class Scenario {
  private id: number;
  private name: string;
  private description: string;
  private commands: Command[];
  private options: ScenarioOption[];

  constructor(
    id: number,
    name: string,
    description: string,
    commands: Command[],
    options: ScenarioOption[],
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.commands = commands;
    this.options = options;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCommands(): Command[] {
    return this.commands;
  }

  public getOptions(): ScenarioOption[] {
    return this.options;
  }
}

export default Scenario;
