import React, { useState,useRef } from 'react'
import Header from './Header'
import {checkValidate} from '../utils/validate'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  updateProfile} from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [user,setUser]=useState(true)
    const[errorMessage,setErrormsg]=useState(null)
    const navi=useNavigate()
 const name=useRef(null)
    const email=useRef(null)
    const password=useRef(null)


    const handleButton=()=>{
        //validation to check if email and pass is right or not if not then perform this operation
        // checkValidate(email,password)
        console.log(email.current.value);
        console.log(password.current.value);

        const message=checkValidate(email.current.value,password.current.value)
        setErrormsg(message)
        if(message) return 

        //sign ,signup
        if(!user){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name.current.value, photoURL: "https://assets.cntraveller.in/photos/625eadcff9b9b60bcf96009e/master/pass/Munsyari.png"
      }).catch((error) => {
        // An error occurred
        navi("/error")
        // ...
      });
   navi('/browser')
//     // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormsg(errorCode,errorMessage)
    // ..
  });

        }
        else{
          


signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navi('/browser')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormsg(errorCode+"-"+errorMessage)
    // ..
  });
        }

        
         
    }

    const toggleClick=()=>{
        setUser(!user)


    }

 
  return (
    <div >
    <Header/>
    <div className='absolute'>

     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
     </div>

      <form onSubmit ={(e)=>e.preventDefault()}className='absolute p-12 bg-black w-4/12  mt-24 mx-auto left-0 right-0 text-white rounded-2xl bg-opacity-60' >
    
           <h1 className='p-4 h-10 '>{user? "Sign In":"Sign Up"}</h1>
           {      !user &&(       <input ref={name} type='text' placeholder='NAME' className='p-2 m-2 w-full bg-gray-500'></input>)
    }
        <input ref={email} type='text' placeholder='EMAIL' className='p-2 m-2 w-full bg-gray-500'></input>
        <input ref={password} type='password' placeholder='PASSWORD' className='p-2 m-2 w-full bg-gray-500'></input>
        <p className='text-red-600 ml-5'> {errorMessage}</p>
        <button className='p-4 m-4 bg-red-500' onClick={handleButton}> {user? "Sign In ":"Sign Up"}</button>

        <p className='py-4 ml-5 cursor-pointer' onClick={toggleClick}> {user ?"New To Netflix?Sing Up now":"Already registerd Sign In now"}</p>
      
      </form>  
    
    </div>
  )
}

export default Login