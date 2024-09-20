import { createContext, ReactNode, useState } from "react";

import { ContextManager } from "./managers"

interface ContextManagerProviderProps {
    children: ReactNode;
}

interface AppManager {
    appManager: ContextManager
}


export const ContextStore = createContext<AppManager>({
    appManager: {} as ContextManager, // Initial dummy value
});

const ContextManagerProvider = ({ children }: ContextManagerProviderProps) => {

    const [appManager] = useState<ContextManager>(new ContextManager());

    return (
        <ContextStore.Provider value={{
            appManager
        }}>
            {children}
        </ContextStore.Provider>
    )
}

export { ContextManagerProvider }