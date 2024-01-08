import React from 'react';

const Unty = ({untyprops}) => {
    return (
        <div>
            <div className= 'border-2 border-green-400 p-4'>
                <h1 className='text-2xl'>Unty</h1>
                <h3 className='text-xl'>Taka: {untyprops}</h3>
            </div>   
        </div>
    );
};

export default Unty;