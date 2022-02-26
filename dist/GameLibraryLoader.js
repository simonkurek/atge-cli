"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameLibraryManager_1 = require("./GameLibrary/GameLibraryManager");
class GameLibraryLoader {
    constructor() {
        this.gameLibrary = new GameLibraryManager_1.default();
        this.run();
    }
    static bootstrap() {
        if (!GameLibraryLoader.initialized) {
            GameLibraryLoader.initialized = true;
            new GameLibraryLoader();
        }
        else {
            throw new Error('GameEngineLoader already initialized');
        }
    }
    run() {
        this.gameLibrary.start();
    }
}
GameLibraryLoader.initialized = false;
GameLibraryLoader.bootstrap();
//# sourceMappingURL=GameLibraryLoader.js.map