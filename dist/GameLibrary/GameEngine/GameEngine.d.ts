import Game from './Game/Game';
declare class GameEngine {
    private commandEngine;
    private game;
    private askUser;
    private errorHandler;
    constructor();
    runGame(game: Game): Promise<void>;
    private getSceneByID;
    private runScene;
    private getPlayerChoice;
}
export default GameEngine;
