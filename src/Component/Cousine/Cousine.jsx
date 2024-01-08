import React from 'react';

const Cousine = ({money}) => {
    return (
        <div>
            <div className= 'border-2 border-green-400 '>
                <h1 className='text-2xl'>Cousine</h1>
                <h3 className='text-xl'>Taka: {money}</h3>
            
            </div>            
        </div>
    );
};

export default Cousine;