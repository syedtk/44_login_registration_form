

import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
      
            <div className="fixed navbar top-0 z-10 bg-gray-400 link to=''">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">LOGO</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-2">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/product'>Product</Link></li>
                    </ul>
                </div>
            </div>
   
    );
};

export default Header;
