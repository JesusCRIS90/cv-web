import { useEffect, useState } from 'react';


const useCheckStaticFileExist = (pathFile: string) => {

    const [fileExists, setFileExists] = useState<boolean>(false);

    useEffect(() => {

        // Function
        const checkFile = async () => {
            try {
                const response = await fetch(pathFile);
                const contentType = response.headers.get('Content-Type');
                if (response.ok && contentType !== 'text/html') {
                    setFileExists(true);
                } else {
                    setFileExists(false);
                }
            } catch (error) {
                setFileExists(false);
            }
        };

        if (pathFile) {
            checkFile();
        }

    }, [pathFile]);

    return {
        fileExists
    }
};

export default useCheckStaticFileExist;