import React, { Suspense } from 'react';
import Loader from './Loader/Loader';


const ShopLazy=React.lazy(() => import('./Shop'));

const MainPage = () => {
    return(

        <Suspense fallback = {<Loader/>}>
            <ShopLazy/>
        </Suspense>
     
    );
}

export default ShopLazy;