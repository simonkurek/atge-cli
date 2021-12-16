"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AskUser_1 = require("../AskUser/AskUser");
const GameLibrary_1 = require("./GameLibrary");
const GameLibraryErrorHandler_1 = require("./GameLibraryErrorHandler");
const GameEngine_1 = require("./GameEngine/GameEngine");
class GameLibraryManagment {
    constructor() {
        this.gameLibrary = new GameLibrary_1.default();
        this.askUser = new AskUser_1.default();
        this.errorHandler = new GameLibraryErrorHandler_1.default();
        this.gameEngine = new GameEngine_1.default();
    }
    start() {
        this.gameListDisplay();
    }
    gameListDisplay() {
        this.gameLibrary
            .listGames()
            .then((games) => {
            this.gamesInfo = games;
            this.gameChoosing(games)
                .then((gameID) => {
                const chosenGameName = this.gameMenu(gameID);
                this.gameOptions(gameID, chosenGameName);
            })
                .catch((err) => {
                this.errorHandler.handleError(err, 'Error: Something went wrong with game choosing');
            });
        })
            .catch((err) => {
            this.errorHandler.handleError(err, 'Error: Something goes wrong with game listing');
        });
    }
    gameChoosing(games) {
        let choiceMenu = {
            message: 'Choose a game',
            choices: games.map((game) => {
                let possibleChoise = {
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
            this.errorHandler.handleError(err, 'Error: Something goes wrong with game choosing in gamelibrary');
            return '';
        });
    }
    gameMenu(gameID) {
        const gameInfo = this.findGameInfoByID(gameID);
        console.log(`
    ${gameInfo.getFullName()}
    ${gameInfo.getDescription()}
    version: ${gameInfo.getVersion()}
    created by: ${gameInfo.getCreator()}
    `);
        return gameInfo.getFullName();
    }
    findGameInfoByID(gameID) {
        let gameInfo = this.gamesInfo.find((game) => {
            return game.getGameID() === gameID;
        });
        return gameInfo;
    }
    gameOptions(gameID, gameName) {
        const choiceMenu = {
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
            }
            else if (choice.value === 'remove') {
                this.gameRemove();
            }
        })
            .catch((err) => {
            this.errorHandler.handleError(err, 'Error: Something goes wrong with game options');
        });
    }
    async loadGameByID(gameID) {
        await this.gameLibrary
            .loadGame(gameID)
            .then(async (game) => {
            await this.gameEngine.runGame(game).then();
        })
            .catch((err) => {
            this.errorHandler.handleError(err, 'Error: Something goes wrong with game loading');
        });
    }
    gameRemove() {
        this.askUser.forConfirmation().then((choice) => {
            if (choice.value) {
                console.log('Removing game...');
            }
            else {
                console.log('canceled');
            }
        });
    }
}
exports.default = GameLibraryManagment;
//# sourceMappingURL=GameLibraryManager.js.map