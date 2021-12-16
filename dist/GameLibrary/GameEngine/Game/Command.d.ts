declare class Command {
    private id;
    private value;
    private text?;
    constructor(id: number, value: number, text?: string);
    getId(): number;
    getValue(): number;
    getText(): string;
}
export default Command;
