"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameLibraryManager_1 = require("./GameLibrary/GameLibraryManager");
class GameEngineLoader {
    constructor() {
        this.gameLibrary = new GameLibraryManager_1.default();
        this.run();
    }
    static bootstrap() {
        if (!GameEngineLoader.initialized) {
            GameEngineLoader.initialized = true;
            new GameEngineLoader();
        }
        else {
            throw new Error('GameEngineLoader already initialized');
        }
    }
    run() {
        this.gameLibrary.start();
    }
}
GameEngineLoader.initialized = false;
GameEngineLoader.bootstrap();
//# sourceMappingURL=GameEngineLoader.js.map