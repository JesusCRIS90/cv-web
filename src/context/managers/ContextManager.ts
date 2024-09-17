import { METHOD_LOG, CONTEXT_MANAGER_LOG } from "../../debug"
import { Manager } from "./Manager";

export class ContextManager {

    private contexts: Map<string, Manager<unknown>>;

    constructor() {
        this.contexts = new Map<string, Manager<unknown>>();
    }

    @METHOD_LOG(CONTEXT_MANAGER_LOG)
    addContext<T>(key: string, context: Manager<T>): void {
        this.contexts.set(key, context);
    }

    @METHOD_LOG(CONTEXT_MANAGER_LOG)
    getContext<T>(key: string): Manager<T> | undefined {
        const context = this.contexts.get(key);

        if (!context) return undefined;

        const storedType = context.getType();

        if ( typeof context.getData() === storedType )
            return context as Manager<T>;
        else{
            console.warn(`Type mismatch: expected ${storedType} but got something else.`);
            return undefined;
        }        
        // return this.contexts.get(key) as Manager<T> | undefined;
    }

    @METHOD_LOG(CONTEXT_MANAGER_LOG)
    hasContext(key: string): boolean {
        return this.contexts.has(key);
    }

    @METHOD_LOG(CONTEXT_MANAGER_LOG)
    deleteContext(key: string): void {
        this.contexts.delete(key);
    }

    @METHOD_LOG(CONTEXT_MANAGER_LOG)
    getType(key: string): string | undefined {
        if ( this.hasContext( key ) ){
            const context = this.contexts.get(key);
            if(context) { return context.getType(); }
        }
        return undefined;
    }
}