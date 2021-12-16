import GameInfo from './GameEngine/Game/GameInfo';
import Game from './GameEngine/Game/Game';
declare class GameLibrary {
    private dataLoader;
    constructor();
    listGames(): Promise<GameInfo[]>;
    loadGame(gameID: string): Promise<Game>;
    addGame(id: string): string;
    removeGame(id: string): string;
    checkUpdates(): void;
}
export default GameLibrary;
