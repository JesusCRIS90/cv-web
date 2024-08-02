import { useEffect, useState } from "react";
import { fetchJSONFile } from "../utils/utilities";

export enum RESULT_STATE {
  SUCCESS = "SUCCESS",
  LOADING =  "LOADING",
  ERROR = "ERROR"
}

const useLoadJSONFile = ( path: string ) => {

    const [data, setData] = useState(null);
    const [ state, setState ] = useState<RESULT_STATE>( RESULT_STATE.LOADING );
  
    useEffect(() => {
  
      // ---- Function
      const loadData = async () => {
  
          const data = await fetchJSONFile( path );
  
          if( data === undefined ){
            setData(null);
            setState( RESULT_STATE.ERROR );
            return;
          }
  
          setData(data);
          setState( RESULT_STATE.SUCCESS );
          
      }
      //  -----
      
      setState( RESULT_STATE.LOADING );
      loadData();
  
    }, []);



  return { 
    data,
    state
  };
};

export default useLoadJSONFile;