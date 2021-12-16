import Command from '../GameEngine/Game/Command';
import Game from '../GameEngine/Game/Game';
import Scenario from '../GameEngine/Game/Scenario';
import ScenarioOption from '../GameEngine/Game/ScenarioOption';
import GameInfo from '../GameEngine/Game/GameInfo';

class DataParser {
  parseGameLibrary(data: string): GameInfo[] {
    const dataObj = JSON.parse(data);
    let games: GameInfo[] = [];
    dataObj.games.forEach((game: any) => {
      games.push(
        new GameInfo(
          game.gameID,
          game.fullName,
          game.description,
          game.creator,
          game.version,
        ),
      );
    });
    return games;
  }
  parseGameInfo(data: string): GameInfo[] {
    let games: GameInfo[] = [];
    return games;
  }

  parseGame(data: string): Game {
    const dataObj = JSON.parse(data);
    return new Game(
      dataObj.gameID,
      dataObj.fullName,
      dataObj.description,
      dataObj.creator,
      dataObj.version,
      dataObj.scenarios.map((scenario: any) => {
        return new Scenario(
          scenario.id,
          scenario.name,
          scenario.description,
          scenario.commands.map((command: any) => {
            if (command.id === 0) {
              return new Command(command.id, command.value, command.text);
            }
            return new Command(command.id, command.value);
          }),
          scenario.options.map((option: any) => {
            return new ScenarioOption(option.id, option.text);
          }),
        );
      }),
    );
  }
}

export default DataParser;
