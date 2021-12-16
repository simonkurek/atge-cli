"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_prompts_1 = require("typed-prompts");
class AskUser {
    async forChoices(data) {
        const message = data.message ? data.message : 'Your choise:';
        return typed_prompts_1.prompt([
            typed_prompts_1.list('value', message, [
                ...data.choices.map((choice) => {
                    return {
                        name: choice.title,
                        value: choice.value,
                    };
                }),
            ]),
        ]);
    }
    async forConfirmation(message) {
        const info = message ? message : 'Are you sure?';
        return typed_prompts_1.prompt([typed_prompts_1.confirm('value', info)]);
    }
}
exports.default = AskUser;
//# sourceMappingURL=AskUser.js.map