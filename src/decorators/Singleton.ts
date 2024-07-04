export function Singleton<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    private static _instance: InstanceType<T>;

    constructor(...args: any[]) {
      super(...args);
      if (!(<any>this.constructor)._instance) {
        (<any>this.constructor)._instance = this;
      }
      return (<any>this.constructor)._instance;
    }
  };
}
