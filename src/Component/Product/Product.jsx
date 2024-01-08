import React from 'react';
import Father from './Father/Father';
import Uncle from './Uncle/Uncle';
import Unty from './Unty/Unty';
import { createContext } from 'react';


let  money= 5454 
 export let moneyContextApi = createContext(2000)

const Product = () => {
   
    return (
        <div className=' my-24 m-auto container text-center mx-auto border-4 border-red-300'>
            <div className= ''>
                <h1 className='text-2xl'>Dadur</h1>
                <h3 className='text-xl'>Taka{money}</h3>
            </div>
            <div className="flex items-center justify-around my-12">
               <moneyContextApi.Provider value={money}>

                <Father></Father>
                <Uncle></Uncle>
                <Unty></Unty>

               </moneyContextApi.Provider>
            </div>
        </div>
    );
};

export default Product;