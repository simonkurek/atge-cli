import Command from './Game/Command';
declare class CommandEngine {
    private commandList;
    constructor();
    executeCommand(command: Command): void;
    private displayText;
    private displayNewLines;
    private displayDots;
    private sleep;
    private clearConsole;
}
export default CommandEngine;
