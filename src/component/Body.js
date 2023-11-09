import React from 'react'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../utils/firebase'
import Login from './Login'
import Browse from './Browse'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'

const Body = () => {
    const dispatch=useDispatch()
 

    const appRouter=createBrowserRouter([{
        path:"/",
        element:<Login/>,
    },
    {
    path:"/browser",
    element:<Browse/>,
    }


])
//why did we use useEffect
//because i want to setup this type of evenetListner once and
    useEffect((e)=>{
        
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName,photoURL} = user
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
    
    // ...
  } else {
    dispatch(removeUser())
   
    // User is signed out
    // ...
  }
});



       })
  return (
    <div>
 
      <RouterProvider router={appRouter}></RouterProvider>

 
    </div>
  )
}

export default Body


