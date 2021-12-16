declare class GameLibraryManagment {
    private gameLibrary;
    private askUser;
    private gamesInfo;
    private errorHandler;
    private gameEngine;
    constructor();
    start(): void;
    private gameListDisplay;
    private gameChoosing;
    private gameMenu;
    private findGameInfoByID;
    private gameOptions;
    private loadGameByID;
    private gameRemove;
}
export default GameLibraryManagment;
