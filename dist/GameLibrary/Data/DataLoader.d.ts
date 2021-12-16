import GameInfo from 'GameLibrary/GameEngine/Game/GameInfo';
import Game from 'GameLibrary/GameEngine/Game/Game';
declare class DataLoader {
    private dataParser;
    private fileReader;
    constructor();
    loadGames(): Promise<GameInfo[]>;
    loadGame(gameId: string): Promise<Game>;
}
export default DataLoader;
