import { METHOD_LOG, DATA_MANAGER_LOG } from "../../debug"


export class Manager<T> {

    private data: T | null = null;

    constructor() {}

    setData(value: T): void {
        this.data = value;
    }

    getData(): T | null {
        return this.data;
    }

    hasData(): boolean {    
        return this.data !== null;
    }

    deleteData(): void {    
        this.data = null;
    }

    getType(): string {
        if( this.data !== null ){
            return typeof this.data === "object" 
                ? this.data.constructor.name
                : typeof this.data;
        }
        return "null";
    }
}

export class TestData {

    private name: string;
    private age: number;

    constructor( name: string, age: number ) {
        this.name = name;
        this.age = age;
    }

    setName( name: string ){
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setAge( age: number ){
        this.age = age;
    }

    getAge(): number {
        return this.age;
    }

}