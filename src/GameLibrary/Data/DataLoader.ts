import IFileReader from './Import/IFileReader';
//import FileReader from './Import/FileReader';
import GameInfo from 'GameLibrary/GameEngine/Game/GameInfo';
import AsyncFileReader from './Import/AsyncFileReader';
import Game from 'GameLibrary/GameEngine/Game/Game';
import DataParser from './DataParser';

class DataLoader {
  private dataParser: DataParser;
  private fileReader: IFileReader;

  constructor() {
    this.dataParser = new DataParser();
    this.fileReader = new AsyncFileReader();
  }

  async loadGames(): Promise<GameInfo[]> {
    return await this.fileReader
      .readFile('gameLibrary.json')
      .then((data) => {
        const resultData = this.dataParser.parseGameLibrary(data);
        if (resultData.length > 0) {
          return resultData;
        }
      })
      .catch((err) => {
        console.error(
          '\n Engine cannot read files corectly.\n',
          'Make sure engine has access to data/ directory \n',
          '(to read files) and files are not corrupted and exists.\n',
        );
        process.exit(0);
      });
  }

  async loadGame(gameId: string): Promise<Game> {
    return await this.fileReader
      .readFile(`${gameId}.json`)
      .then((data) => {
        return this.dataParser.parseGame(data);
      })
      .catch((err) => {
        console.error(
          '\n Engine cannot read game files corectly.\n',
          'Make sure engine has access to data/ directory \n',
          '(to read files) and files are not corrupted and exists.\n',
        );
        process.exit(0);
      });
  }
}

export default DataLoader;
