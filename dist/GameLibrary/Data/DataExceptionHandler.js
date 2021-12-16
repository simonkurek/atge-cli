"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataExceptionHandler {
    handleFileReadException() {
        console.error('\n Engine cannot read files corectly.\n', 'Make sure engine has access to data/ directory \n', '(to read files) and files are not corrupted and exists.\n');
        process.exit(0);
    }
}
exports.default = DataExceptionHandler;
//# sourceMappingURL=DataExceptionHandler.js.map