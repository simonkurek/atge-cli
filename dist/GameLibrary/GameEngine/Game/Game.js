"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor(gameID, fullName, description, creator, version, scenarios) {
        this.gameID = gameID;
        this.fullName = fullName;
        this.description = description;
        this.creator = creator;
        this.version = version;
        this.scenarios = scenarios;
    }
    getGameID() {
        return this.gameID;
    }
    getFullName() {
        return this.fullName;
    }
    getDescription() {
        return this.description;
    }
    getCreator() {
        return this.creator;
    }
    getVersion() {
        return this.version;
    }
    getScenarios() {
        return this.scenarios;
    }
}
exports.default = Game;
//# sourceMappingURL=Game.js.map