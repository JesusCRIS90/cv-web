import { METHOD_LOG, DATA_MANAGER_LOG } from "../../debug"


export class Manager<T> {

    private data: T;

    constructor( initialData: T ) {
        this.data = initialData;
    }

    setData(value: T): void {
        this.data = value;
    }

    getData(): T {
        return this.data;
    }

    // hasData(): boolean {    
    //     return this.data !== undefined;
    // }

    // deleteData(): void {    
    //     this.data = undefined;
    // }

    getType(): string {
        if (this.data !== undefined && this.data !== null) {
            return typeof this.data === "object"
                ? (this.data as Object).constructor.name
                : typeof this.data;
        }
        return "undefined";
    }
}
