import React from 'react';

const ShopProduct = ({product}) => {
    const {img, catagory, rating, price} = product
    return (
        <div>
           <div className="card w-64 bg-base-100 shadow-xl">
                <figure><img className='max-w-full' src ={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{catagory}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>Rating: {rating}</p>
                    <h1 className='font-bold'>Price: {price}</h1>
                    
                    <div>
                    <button className="btn bg-yellow-500 text-black btn-primary w-full">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopProduct;