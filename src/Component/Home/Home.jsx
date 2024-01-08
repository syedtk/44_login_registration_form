import React from 'react';
import image_bg from '../../assets/Img/Group 12.jpg'
import image_sty from '../../assets/Img/austin-wade-AoYT0ArTTmg-unsplash 1.png'

const Home = () => {
    return (
        <div>
           <div className="md:flex justify-around mt-32 flex-row-reverse">
           <div className="relative">
                    
                    <img className='' src={image_bg} alt="" />
             
                
                    <img className='absolute bottom-4 left-4' src={image_sty} alt="" />
            
            </div>
                <div className="">
                    <div className="md:mt-[40%] my-12 px-12 text-center">
                        <h1 className='text-5xl font-bold'>
                            New Collection For Fall
                        </h1>
                        <p className='text-xl pt-5 pb-12'>
                            Discover all the new arrivals of ready-to-wear collection.
                        </p>
                        <a href="">
                            <button className='btn bg-[#FF9900]'>
                                    SHOP NOW
                            </button>
                        
                        </a>
                    </div>                    
                </div>
                
            </div>
        </div>
    );
};

export default Home;