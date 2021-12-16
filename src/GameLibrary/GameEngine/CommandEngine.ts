import Command from './Game/Command';

class CommandEngine {
  private commandList: Function[] = [];

  constructor() {
    this.commandList = [
      this.displayText, // id 0
      this.displayNewLines, // id 1
      this.displayDots, // id 2
      this.sleep, // id 3
      this.clearConsole, // id 4
    ];
  }

  public executeCommand(command: Command): void {
    const commandID: number = command.getId();
    this.commandList[commandID](command);
  }

  private displayText(command: Command): void {
    const text: string = command.getText();
    console.log(text);
  }

  private displayNewLines(command: Command): void {
    const numberOfLines: number = command.getValue();
    for (let i = 0; i < numberOfLines; i++) {
      console.log('');
    }
  }

  private displayDots(command: Command): void {
    const numberOfDots: number = command.getValue();
    console.log('●'.repeat(numberOfDots));
  }

  private sleep(command: Command): void {
    //sync function for sleep
    const ms: number = command.getValue();
    const start: number = Date.now();
    let now: number = start;
    while (now - start < ms) {
      now = Date.now();
    }
  }

  private clearConsole(command: Command): void {
    console.clear();
  }
}

export default CommandEngine;
