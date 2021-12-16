"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandEngine {
    constructor() {
        this.commandList = [];
        this.commandList = [
            this.displayText,
            this.displayNewLines,
            this.displayDots,
            this.sleep,
            this.clearConsole,
        ];
    }
    executeCommand(command) {
        const commandID = command.getId();
        this.commandList[commandID](command);
    }
    displayText(command) {
        const text = command.getText();
        console.log(text);
    }
    displayNewLines(command) {
        const numberOfLines = command.getValue();
        for (let i = 0; i < numberOfLines; i++) {
            console.log('');
        }
    }
    displayDots(command) {
        const numberOfDots = command.getValue();
        console.log('●'.repeat(numberOfDots));
    }
    sleep(command) {
        const ms = command.getValue();
        const start = Date.now();
        let now = start;
        while (now - start < ms) {
            now = Date.now();
        }
    }
    clearConsole(command) {
        console.clear();
    }
}
exports.default = CommandEngine;
//# sourceMappingURL=CommandEngine.js.map