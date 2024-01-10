import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShopProduct from './Product/ShopProduct';

const Shop = () => {
    const products = useLoaderData();


    const renderedProducts = Array.isArray(products)
        ? products.map(product => (
            <ShopProduct
                key={product.id}
                product={product}
            />
        ))
        : null;
    
    return (
        <div className='flex container mx-auto my-20'>
            <div className='sm:w-4/5 md:px-6'>
                <div className="my-12 container mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {renderedProducts}
                </div>
            </div>

            <div className='leading-[2.2rem] mt-4 bg-yellow-300 sm:w-1/5 container mx-auto p-3 fixed top-[110px] right-3 rounded-2xl'>
                <h1 className='text-2xl text-center mt-4'>Order Summary</h1>
                <div className='mb-6'>
                    {/* Your order summary details here */}
                </div>
                <button className='btn btn-sm w-full hover:text-black bg-red-500 border-0 my-3 text-white'>Clear Cart</button>
                <br />
                <button className='btn btn-sm w-full hover:text-black bg-orange-500 border-0 text-white'>Review Order</button>
            </div>
        </div>
    );
};

export default Shop;
