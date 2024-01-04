// registation form

import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import { Link } from 'react-router-dom';

 

    const auth = getAuth(app);



    const About = () => {
    const [success,setsuccess] = useState(false)
    const [error, seterror] = useState(null)
    const handleRegistration = (event) => {
        event.preventDefault();
        const name = event.target.fullName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            console.log(userCredential);
            setsuccess(true)
            seterror(null)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterror(errorMessage)
            setsuccess(false)
        
            // ..
          });

       }
    return (
               <div class="w-full max-w-md mx-auto my-16">
                    <form onSubmit={handleRegistration} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Name
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"  type="text" name='fullName' placeholder="Your Name" required/>
                        </div>
                        <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" name='email' type="email" placeholder="Your Email" required/>
                        </div>
                        <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" name='password' type="password" placeholder="********" required/>
                        </div>
                        <div class="flex items-center justify-between">
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                           Submit
                        </button>
                        </div>
                        <div className='p-4'>
                        <p>
                        All ready have an account <Link to={'/contact'} className='bg-gray-400 w-[70px] rounded-md '>log in</Link> 
                        </p>
                        </div>
                        {
                            success && <p className='text-green-500'>Successfully registeredp please <Link to={'/contact'} className='bg-gray-400 w-[70px] rounded-md '>log in</Link></p>
                        }
                        {
                             <p className="text-red-500">{error}</p>
                        }
                     </form>
           </div>
    
    );
};

export default About;