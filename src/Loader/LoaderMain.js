import { useEffect, useState } from 'react';
import LoaderPage from './Loader/LoaderPage';

function LoaderMain() {

    const [stateLoader, setStateLoader] = useState(true);
    
    
    useEffect(() => {
    const timer = setTimeout(() =>setStateLoader(false),1000);
    return () => clearTimeout(timer)
    },[])
    
    
    return (
        <div>
        {stateLoader&&<LoaderPage/>}
        </div>
    );
}

export default LoaderMain;
