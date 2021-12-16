"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AsyncFileReader_1 = require("./Import/AsyncFileReader");
const DataParser_1 = require("./DataParser");
class DataLoader {
    constructor() {
        this.dataParser = new DataParser_1.default();
        this.fileReader = new AsyncFileReader_1.default();
    }
    async loadGames() {
        return await this.fileReader
            .readFile('gameLibrary.json')
            .then((data) => {
            const resultData = this.dataParser.parseGameLibrary(data);
            if (resultData.length > 0) {
                return resultData;
            }
        })
            .catch((err) => {
            console.error('\n Engine cannot read files corectly.\n', 'Make sure engine has access to data/ directory \n', '(to read files) and files are not corrupted and exists.\n');
            process.exit(0);
        });
    }
    async loadGame(gameId) {
        return await this.fileReader
            .readFile(`${gameId}.json`)
            .then((data) => {
            return this.dataParser.parseGame(data);
        })
            .catch((err) => {
            console.error('\n Engine cannot read game files corectly.\n', 'Make sure engine has access to data/ directory \n', '(to read files) and files are not corrupted and exists.\n');
            process.exit(0);
        });
    }
}
exports.default = DataLoader;
//# sourceMappingURL=DataLoader.js.map