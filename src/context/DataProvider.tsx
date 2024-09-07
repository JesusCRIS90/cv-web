import { createContext, ReactNode } from "react";
import useLoadJSONFile, { RESULT_STATE } from "../hooks/useLoadJSONFile";

interface DataProviderProps {
    children: ReactNode;
}

interface DataContextType {
    data: any;      // You can replace 'any' with a more specific type
    state: RESULT_STATE;  // Adjust this to the actual type of 'state' from your useLoadJSONFile hook
}

const initialState: DataContextType = {
    data: null,
    state: RESULT_STATE.LOADING
}

export const DataContext = createContext<DataContextType>(initialState);

const DataProvider = ( {children}: DataProviderProps) => {
  
    const { data, state } = useLoadJSONFile('../public/db/cvInfo.json');
  
    return (
    <DataContext.Provider value={{
        data,
        state
    }}>
      {children}
    </DataContext.Provider>
  )
}

export {DataProvider};
