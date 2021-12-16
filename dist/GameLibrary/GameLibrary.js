"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataLoader_1 = require("./Data/DataLoader");
class GameLibrary {
    constructor() {
        this.dataLoader = new DataLoader_1.default();
    }
    async listGames() {
        return await this.dataLoader.loadGames();
    }
    async loadGame(gameID) {
        return await this.dataLoader.loadGame(gameID);
    }
    addGame(id) {
        throw new Error('Method not implemented.');
    }
    removeGame(id) {
        throw new Error('Method not implemented.');
    }
    checkUpdates() {
        throw new Error('Method not implemented.');
    }
}
exports.default = GameLibrary;
//# sourceMappingURL=GameLibrary.js.map