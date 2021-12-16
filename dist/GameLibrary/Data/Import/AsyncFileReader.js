"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class AsyncFileReader {
    constructor() {
        this.dataDirectoryPath = this.pathFind();
    }
    pathFind() {
        let pathArray = __dirname.split('/');
        pathArray.splice(-4, 4);
        pathArray.push('data');
        const result = pathArray.join('/') + '/';
        return result;
    }
    async readFile(fileName) {
        const data = await fs_1.promises.readFile(this.dataDirectoryPath + fileName, 'utf8');
        return data;
    }
    saveFile(filePath, filename) {
        throw new Error('Method not implemented.');
    }
}
exports.default = AsyncFileReader;
//# sourceMappingURL=AsyncFileReader.js.map