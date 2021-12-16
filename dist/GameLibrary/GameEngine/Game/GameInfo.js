"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameInfo {
    constructor(gameID, fullName, description, creator, version) {
        this.gameID = gameID;
        this.fullName = fullName;
        this.description = description;
        this.creator = creator;
        this.version = version;
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
}
exports.default = GameInfo;
//# sourceMappingURL=GameInfo.js.map