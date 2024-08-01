import { useEffect, useState } from "react";
import { fetchJSONFile } from "../utils/utilities";

const useLoadJSONFile = ( path: string ) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
  
      const loadData = async () => {
  
          const data = await fetchJSONFile( path );
        //   console.log(data);
  
          if( data === undefined ){
            setData(null);
            setError(true);
            return;
          }
  
          setLoading(false);
          setData(data);
  
      }
    
      loadData();
  
    }, []);



  return { 
    data,
    loading,
    error
   };
};

export default useLoadJSONFile;