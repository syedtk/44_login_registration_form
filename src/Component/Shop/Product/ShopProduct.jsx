import React from 'react';

const ShopProduct = ({product}) => {
    const {img, catagory, rating, price} = product
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
                <img class="w-full" src={img} alt="Placeholder image"/>
                <div class="px-6">
                    <div class="font-bold">Catagori: {catagory}</div>
                    <p class="text-gray-700 text-base">Rating: {rating}
                    </p>
                </div>
                <div class="px-6 pb-2 font-bold">Price: {price}
                </div>
                <div>
                <button className="btn hover:bg-gray-300 border-0 bg-yellow-500 text-black btn-primary w-full">Add to Cart</button>
                </div>
            </div>

        </div>
    );
};

export default ShopProduct;