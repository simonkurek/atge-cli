import IAskUser from '../AskUser/IAskUser';
import AskUser from '../AskUser/AskUser';
import GameInfo from 'GameLibrary/GameEngine/Game/GameInfo';
import GameLibrary from './GameLibrary';
import AskUserBody from 'AskUser/AskUserBody';
import IChoice from '../AskUser/IChoice';
import GameLibraryErrorHandler from './GameLibraryErrorHandler';
import GameEngine from './GameEngine/GameEngine';
import Game from './GameEngine/Game/Game';

class GameLibraryManagment {
  private gameLibrary: GameLibrary;
  private askUser: IAskUser;
  private gamesInfo: GameInfo[];
  private errorHandler: GameLibraryErrorHandler;
  private gameEngine: GameEngine;

  constructor() {
    this.gameLibrary = new GameLibrary();
    this.askUser = new AskUser();
    this.errorHandler = new GameLibraryErrorHandler();
    this.gameEngine = new GameEngine();
  }

  public start(): void {
    this.gameListDisplay();
  }

  private gameListDisplay(): void {
    this.gameLibrary
      .listGames()
      .then((games) => {
        this.gamesInfo = games;
        this.gameChoosing(games)
          .then((gameID: string) => {
            const chosenGameName: string = this.gameMenu(gameID);
            this.gameOptions(gameID, chosenGameName);
          })
          .catch((err) => {
            this.errorHandler.handleError(
              err,
              'Error: Something went wrong with game choosing',
            );
          });
      })
      .catch((err) => {
        this.errorHandler.handleError(
          err,
          'Error: Something goes wrong with game listing',
        );
      });
  }

  private gameChoosing(games: GameInfo[]): Promise<string> {
    let choiceMenu: AskUserBody = {
      message: 'Choose a game',
      choices: games.map((game) => {
        let possibleChoise: IChoice = {
          title: game.getFullName(),
          value: game.getGameID(),
        };
        return possibleChoise;
      }),
    };
    return this.askUser
      .forChoices(choiceMenu)
      .then((choice) => {
        return choice.value;
      })
      .catch((err) => {
        this.errorHandler.handleError(
          err,
          'Error: Something goes wrong with game choosing in gamelibrary',
        );
        return '';
      });
  }

  private gameMenu(gameID: string): string {
    const gameInfo: GameInfo = this.findGameInfoByID(gameID);
    console.log(`
    ${gameInfo.getFullName()}
    ${gameInfo.getDescription()}
    version: ${gameInfo.getVersion()}
    created by: ${gameInfo.getCreator()}
    `);
    return gameInfo.getFullName();
  }

  private findGameInfoByID(gameID: string): GameInfo {
    let gameInfo: GameInfo = this.gamesInfo.find((game) => {
      return game.getGameID() === gameID;
    });
    return gameInfo;
  }

  private gameOptions(gameID: string, gameName: string): void {
    const choiceMenu: AskUserBody = {
      message: 'Game options:',
      choices: [
        { title: 'Play', value: 'play' },
        { title: 'Uninstall', value: 'remove' },
      ],
    };
    this.askUser
      .forChoices(choiceMenu)
      .then((choice) => {
        if (choice.value === 'play') {
          this.loadGameByID(gameID);
        } else if (choice.value === 'remove') {
          this.gameRemove();
        }
      })
      .catch((err) => {
        this.errorHandler.handleError(
          err,
          'Error: Something goes wrong with game options',
        );
      });
  }

  private async loadGameByID(gameID: string): Promise<void> {
    await this.gameLibrary
      .loadGame(gameID)
      .then(async (game: Game) => {
        await this.gameEngine.runGame(game).then();
      })
      .catch((err) => {
        this.errorHandler.handleError(
          err,
          'Error: Something goes wrong with game loading',
        );
      });
  }

  private gameRemove(): void {
    this.askUser.forConfirmation().then((choice) => {
      if (choice.value) {
        console.log('Removing game...');
      } else {
        console.log('canceled');
      }
    });
  }
}

export default GameLibraryManagment;
