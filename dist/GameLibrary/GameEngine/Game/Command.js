"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    constructor(id, value, text) {
        this.id = id;
        this.value = value;
        text ? (this.text = text) : '';
    }
    getId() {
        return this.id;
    }
    getValue() {
        return this.value;
    }
    getText() {
        return this.text ? this.text : '';
    }
}
exports.default = Command;
//# sourceMappingURL=Command.js.map