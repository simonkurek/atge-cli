class Command {
  private id: number;
  private value: number;
  private text?: string;

  constructor(id: number, value: number, text?: string) {
    this.id = id;
    this.value = value;
    text ? (this.text = text) : '';
  }

  public getId(): number {
    return this.id;
  }

  public getValue(): number {
    return this.value;
  }

  public getText(): string {
    return this.text ? this.text : '';
  }
}

export default Command;
