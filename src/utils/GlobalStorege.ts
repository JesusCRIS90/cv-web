import { Singleton } from "../decorators/Singleton";

type AllowedData =
  | string
  | string[]
  | HTMLElementData
  | HTMLElementData[]
  | number
  | null;

type HTMLElementData = HTMLElement;

@Singleton
class GlobalStorage {
  private storeDict: Map<string, AllowedData>;

  constructor() {
    this.storeDict = new Map<string, AllowedData>();
  }

  public setData(key: string, data: AllowedData): boolean {
    if (this.isDataValid(data)) {
      this.storeDict.set(key, data);
      return true;
    }
    return false;
  }

  public getData(key: string): AllowedData | undefined {
    if (this.storeDict.has(key)) return this.storeDict.get(key);
    return undefined;
  }

  private isDataValid(data: AllowedData) {
    /**
     * Add here new check in base of new data types
     */
    return (
      this.isHTMLElement(data) ||
      this.isNumber(data) ||
      this.isString(data) ||
      this.isStringArray(data) ||
      this.isNull(data) ||
      this.isHTMLElementArray(data)
    );
  }

  /**
   * Add here new methods to new types of data
   */
  private isHTMLElement(data: AllowedData) {
    return data instanceof HTMLElement;
  }

  private isNumber(data: AllowedData) {
    return typeof data === "number";
  }

  private isString(data: AllowedData) {
    return typeof data === "string";
  }

  private isStringArray(data: AllowedData) {
    return Array.isArray(data) && data.every((item) => this.isString(item));
  }

  private isNull(data: AllowedData) {
    return data === null;
  }

  private isHTMLElementArray(data: AllowedData) {
    return (
      Array.isArray(data) &&
      data.every((item) => item instanceof HTMLElement || item === null)
    );
  }
}


export { GlobalStorage };
