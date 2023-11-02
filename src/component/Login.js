import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [user,setUser]=useState(true)

    const toggleClick=()=>{
        setUser(!user)


    }
  return (
    <div >
    <Header/>
    <div className='absolute'>

     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
     </div>

      <form className='absolute p-12 bg-black w-4/12  mt-24 mx-auto left-0 right-0 text-white rounded-2xl bg-opacity-60' >
    
           <h1 className='p-4 h-10 '>{user? "Sign In":"Sign Up"}</h1>
           {      !user &&(       <input type='text' placeholder='NAME' className='p-2 m-2 w-full bg-gray-500'></input>)
    }
        <input type='text' placeholder='EMAIL' className='p-2 m-2 w-full bg-gray-500'></input>
        <input type='password' placeholder='PASSWORD' className='p-2 m-2 w-full bg-gray-500'></input>
        <button className='p-4 m-4 bg-red-500' > {user? "Sign In":"Sign Up"}</button>

        <p className='py-4 ml-5 cursor-pointer' onClick={toggleClick}>{user ?"New To Netflix?Sing Up now":"Already registerd Sign In now"}</p>
      
      </form>
    
    </div>
  )
}

export default Login