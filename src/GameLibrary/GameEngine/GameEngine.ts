import AskUser from '../../AskUser/AskUser';
import IAskUser from '../../AskUser/IAskUser';
import AskUserBody from '../../AskUser/AskUserBody';
import CommandEngine from './CommandEngine';
import Game from './Game/Game';
import Scenario from './Game/Scenario';
import ScenarioOption from './Game/ScenarioOption';
import IChoice from '../../AskUser/IChoice';
import GameLibraryErrorHandler from '../../GameLibrary/GameLibraryErrorHandler';

class GameEngine {
  private commandEngine: CommandEngine;
  private game: Game;
  private askUser: IAskUser;
  private errorHandler: GameLibraryErrorHandler;

  constructor() {
    this.commandEngine = new CommandEngine();
    this.askUser = new AskUser();
    this.errorHandler = new GameLibraryErrorHandler();
  }

  public async runGame(game: Game): Promise<void> {
    console.log(`Running game ${game.getFullName()}`);
    this.game = game;
    var nextSceneID: number = 0;
    var running = true;
    while (running) {
      if (nextSceneID === -1) {
        running = false;
        return;
      } else if (nextSceneID === -2) {
        this.errorHandler.handleError(
          new Error(`Choice error`),
          `Uncaught error while getting player choice`,
        );
      } else {
        const scene: Scenario = this.getSceneByID(nextSceneID);
        await this.runScene(scene)
          .then((newNextSceneID) => {
            nextSceneID = newNextSceneID;
          })
          .catch((error) => {
            this.errorHandler.handleError(error, `Invalid scene option`);
          });
      }
    }
  }

  private getSceneByID(sceneID: number): Scenario {
    return this.game.getScenarios().find((scene) => scene.getId() === sceneID);
  }

  private async runScene(scene: Scenario): Promise<number> {
    const sceneCommands = scene.getCommands();
    if (sceneCommands.length > 0) {
      scene.getCommands().forEach((command) => {
        this.commandEngine.executeCommand(command);
      });
    } else {
      console.error('Invalid scene', scene);
    }

    return await this.getPlayerChoice(scene.getOptions());
  }

  private async getPlayerChoice(options: ScenarioOption[]): Promise<number> {
    if (options.length === 0) {
      return -1;
    }
    if (options.length === 1) {
      return options[0].getId();
    }
    const playerChoices: AskUserBody = {
      message: 'What do you want to do?',
      choices: options.map((option) => {
        const choice: IChoice = {
          title: option.getText(),
          value: option.getId().toString(),
        };
        return choice;
      }),
    };
    return await this.askUser
      .forChoices(playerChoices)
      .then((choice) => {
        const nextSceneID: number = parseInt(choice.value);
        return nextSceneID;
      })
      .catch((error) => {
        this.errorHandler.handleError(
          error,
          `Error while getting player choice`,
        );
        return -2;
      });
  }
}

export default GameEngine;
