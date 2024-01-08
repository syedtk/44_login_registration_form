import React, { useContext } from 'react';
import { moneyContextApi } from '../Product/Product';

const Brother = () => {
    const useApi = useContext(moneyContextApi)
    return (
        <div>
             <div className= 'border-2 border-green-400'>
                <h1 className='text-2xl'>Brother</h1>
                <h3 className='text-xl'>Taka: {useApi} </h3>
            </div>
        </div>
    );
};

export default Brother;