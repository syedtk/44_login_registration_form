

import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
      
            <div className="fixed navbar top-0  bg-gray-400 link to=''">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">LOGO</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-2">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>Register</Link></li>
                        <li><Link to='/contact'>Login</Link></li>
                        <li><Link to='/home'>Product</Link></li>
                    </ul>
                </div>
            </div>
   
    );
};

export default Header;
