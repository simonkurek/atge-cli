import Game from '../GameEngine/Game/Game';
import GameInfo from '../GameEngine/Game/GameInfo';
declare class DataParser {
    parseGameLibrary(data: string): GameInfo[];
    parseGameInfo(data: string): GameInfo[];
    parseGame(data: string): Game;
}
export default DataParser;
