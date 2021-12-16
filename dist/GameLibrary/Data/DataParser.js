"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../GameEngine/Game/Command");
const Game_1 = require("../GameEngine/Game/Game");
const Scenario_1 = require("../GameEngine/Game/Scenario");
const ScenarioOption_1 = require("../GameEngine/Game/ScenarioOption");
const GameInfo_1 = require("../GameEngine/Game/GameInfo");
class DataParser {
    parseGameLibrary(data) {
        const dataObj = JSON.parse(data);
        let games = [];
        dataObj.games.forEach((game) => {
            games.push(new GameInfo_1.default(game.gameID, game.fullName, game.description, game.creator, game.version));
        });
        return games;
    }
    parseGameInfo(data) {
        let games = [];
        return games;
    }
    parseGame(data) {
        const dataObj = JSON.parse(data);
        return new Game_1.default(dataObj.gameID, dataObj.fullName, dataObj.description, dataObj.creator, dataObj.version, dataObj.scenarios.map((scenario) => {
            return new Scenario_1.default(scenario.id, scenario.name, scenario.description, scenario.commands.map((command) => {
                if (command.id === 0) {
                    return new Command_1.default(command.id, command.value, command.text);
                }
                return new Command_1.default(command.id, command.value);
            }), scenario.options.map((option) => {
                return new ScenarioOption_1.default(option.id, option.text);
            }));
        }));
    }
}
exports.default = DataParser;
//# sourceMappingURL=DataParser.js.map