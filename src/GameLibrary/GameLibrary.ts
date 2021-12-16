import DataLoader from './Data/DataLoader';
import GameInfo from './GameEngine/Game/GameInfo';
import Game from './GameEngine/Game/Game';

class GameLibrary {
  private dataLoader: DataLoader;

  constructor() {
    this.dataLoader = new DataLoader();
  }
  //local management
  async listGames(): Promise<GameInfo[]> {
    return await this.dataLoader.loadGames();
  }
  async loadGame(gameID: string): Promise<Game> {
    return await this.dataLoader.loadGame(gameID);
  }
  //remote managment
  addGame(id: string): string {
    throw new Error('Method not implemented.');
  }
  removeGame(id: string): string {
    throw new Error('Method not implemented.');
  }
  checkUpdates(): void {
    throw new Error('Method not implemented.');
  }
}

export default GameLibrary;
