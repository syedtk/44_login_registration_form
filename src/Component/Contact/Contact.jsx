
// Login form


import {  getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import { Link } from 'react-router-dom';
import { useState } from "react";

const auth = getAuth(app)





const Contact = () => {

  const [error,seterror] = useState(null)
  const [success,setsuccess] = useState(false)

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log(userCredential);
        setsuccess(true)
        seterror(false)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterror(errorMessage)
        setsuccess(null)
        // ..
      });

   }
  return (
    <div class="w-full max-w-md mx-auto my-16">
    <form onSubmit={handleLogin} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
         Log in
        </button>
        </div>
        <div className='p-4'>
          <p>
             Dont have an account <Link to={'/about'} className='bg-gray-400 w-[70px] rounded-md '>Register Now</Link> 
          </p>
        </div>
        
      
        {
         <p className="text-red-500">{error}</p>
        }
        {
            success && <p className='text-green-500'>Successfully log in </p>
         }
   

     </form>
</div>
  );
};

export default Contact;