"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AskUser_1 = require("../../AskUser/AskUser");
const CommandEngine_1 = require("./CommandEngine");
const GameLibraryErrorHandler_1 = require("../../GameLibrary/GameLibraryErrorHandler");
class GameEngine {
    constructor() {
        this.commandEngine = new CommandEngine_1.default();
        this.askUser = new AskUser_1.default();
        this.errorHandler = new GameLibraryErrorHandler_1.default();
    }
    async runGame(game) {
        console.log(`Running game ${game.getFullName()}`);
        this.game = game;
        var nextSceneID = 0;
        var running = true;
        while (running) {
            if (nextSceneID === -1) {
                running = false;
                return;
            }
            else if (nextSceneID === -2) {
                this.errorHandler.handleError(new Error(`Choice error`), `Uncaught error while getting player choice`);
            }
            else {
                const scene = this.getSceneByID(nextSceneID);
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
    getSceneByID(sceneID) {
        return this.game.getScenarios().find((scene) => scene.getId() === sceneID);
    }
    async runScene(scene) {
        const sceneCommands = scene.getCommands();
        if (sceneCommands.length > 0) {
            scene.getCommands().forEach((command) => {
                this.commandEngine.executeCommand(command);
            });
        }
        else {
            console.error('Invalid scene', scene);
        }
        return await this.getPlayerChoice(scene.getOptions());
    }
    async getPlayerChoice(options) {
        if (options.length === 0) {
            return -1;
        }
        if (options.length === 1) {
            return options[0].getId();
        }
        const playerChoices = {
            message: 'What do you want to do?',
            choices: options.map((option) => {
                const choice = {
                    title: option.getText(),
                    value: option.getId().toString(),
                };
                return choice;
            }),
        };
        return await this.askUser
            .forChoices(playerChoices)
            .then((choice) => {
            const nextSceneID = parseInt(choice.value);
            return nextSceneID;
        })
            .catch((error) => {
            this.errorHandler.handleError(error, `Error while getting player choice`);
            return -2;
        });
    }
}
exports.default = GameEngine;
//# sourceMappingURL=GameEngine.js.map