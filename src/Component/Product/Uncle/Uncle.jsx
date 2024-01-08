import React from 'react';
import Cousine from '../../Cousine/Cousine';

const Uncle = ({uncleProps}) => {
    return (
        <div>
            <div className= 'border-2 border-green-400 mx-6 p-4'>
                <h1 className='text-2xl'>Uncle</h1>
                <h3 className='text-xl'>Taka: {uncleProps}</h3>
                <Cousine money={uncleProps}></Cousine>
            </div>
        </div>
    );
};

export default Uncle;