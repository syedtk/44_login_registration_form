import React, { useContext } from 'react';
import Brother from '../../Brother/Brother';
import { moneyContextApi } from '../Product';

const Father = ({mon}) => {
    let useContest = useContext(moneyContextApi)
    return (
        <div>
            <div className= 'border-2 p-4 border-green-400'>
                <h1 className='text-2xl'>Father</h1>
                <h3 className='text-xl'>Taka: {} </h3>
                <Brother></Brother>
            </div>
                    </div>
    );
};

export default Father;