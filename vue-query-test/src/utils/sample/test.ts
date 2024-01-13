export class TestInfo {
  private name: string
  constructor() {
    this.name = ''
  }

  getName() {
    return this.name
  }
  setName(newName: string) {
    this.name = newName
  }
}

export const testInfo = new TestInfo()
