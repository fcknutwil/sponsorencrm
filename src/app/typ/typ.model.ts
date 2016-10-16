export class Typ {
  private name: string;
  private editable: boolean;

  public constructor(name: string, editable?: boolean) {
    this.name = name;
    this.editable = editable || false;
  }

  public getName(): string {
    return this.name;
  }

  public isEditable(): boolean {
    return this.editable;
  }
}
