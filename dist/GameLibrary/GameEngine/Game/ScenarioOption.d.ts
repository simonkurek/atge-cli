declare class ScenarioOption {
    private id;
    private text;
    constructor(id: number, text: string);
    getId(): number;
    getText(): string;
}
export default ScenarioOption;
