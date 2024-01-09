import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setSignInForm]=useState(true);

    const toggleSignInForm = ()=>{
        setSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/> 
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo" />
        </div> 
        <form action="" className='absolute w-3/12 bg-black my-36 p-5 mx-auto right-0 left-0 text-white bg-opacity-80 '>
            <h1 className='font-bold text-3xl py-4 mx-3'>{isSignInForm? "Sign In" : "Sign up"}</h1>
            {!isSignInForm && (<input type="text" placeholder="Name" className=' mx-3 my-3 p-2 bg-gray-700'/>)}
            <input type="text" placeholder="Email Address" className=' mx-3 my-3 p-2 bg-gray-700'/>
            <input type="text" placeholder="Password" className=' mx-3 my-3 p-2 bg-gray-700'/>
            <button className='p-3 my-4 mx-2 bg-red-700  w-11/12 rounded-lg'>{isSignInForm? "Sign In" : "Sign up"}</button>
            <p className='py-2 ml-1 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" :"Already Registered?Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login
