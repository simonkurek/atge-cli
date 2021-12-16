class ScenarioOption {
  private id: number;
  private text: string;

  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }

  public getId(): number {
    return this.id;
  }

  public getText(): string {
    return this.text;
  }
}

export default ScenarioOption;
