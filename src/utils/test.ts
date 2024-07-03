import { Singleton } from "../decorators/Singleton";

@Singleton
class MyClass {
  constructor(public name: string) {}

  public getName(): string {
    return this.name;
  }
}

export { MyClass };
