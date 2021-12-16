import Scenario from 'GameLibrary/GameEngine/Game/Scenario';
declare class Game {
    private gameID;
    private fullName;
    private description;
    private creator;
    private version;
    private scenarios;
    constructor(gameID: string, fullName: string, description: string, creator: string, version: string, scenarios: Scenario[]);
    getGameID(): string;
    getFullName(): string;
    getDescription(): string;
    getCreator(): string;
    getVersion(): string;
    getScenarios(): Scenario[];
}
export default Game;
