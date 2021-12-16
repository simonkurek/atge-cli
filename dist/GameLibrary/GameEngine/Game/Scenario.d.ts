import Command from 'GameLibrary/GameEngine/Game/Command';
import ScenarioOption from 'GameLibrary/GameEngine/Game/ScenarioOption';
declare class Scenario {
    private id;
    private name;
    private description;
    private commands;
    private options;
    constructor(id: number, name: string, description: string, commands: Command[], options: ScenarioOption[]);
    getId(): number;
    getName(): string;
    getDescription(): string;
    getCommands(): Command[];
    getOptions(): ScenarioOption[];
}
export default Scenario;
