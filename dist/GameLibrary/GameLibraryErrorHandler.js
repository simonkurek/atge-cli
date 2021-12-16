"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameLibraryErrorHandler {
    handleError(error, errorMessage) {
        console.error(errorMessage);
        console.error('Developer info');
        console.error(error);
        process.exit(0);
    }
}
exports.default = GameLibraryErrorHandler;
//# sourceMappingURL=GameLibraryErrorHandler.js.map