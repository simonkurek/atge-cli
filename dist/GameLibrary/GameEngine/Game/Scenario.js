"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scenario {
    constructor(id, name, description, commands, options) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.commands = commands;
        this.options = options;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getCommands() {
        return this.commands;
    }
    getOptions() {
        return this.options;
    }
}
exports.default = Scenario;
//# sourceMappingURL=Scenario.js.map