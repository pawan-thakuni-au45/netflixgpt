import React from 'react'
import { signOut } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import {auth} from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux';
import { tooglegptsearchview } from '../utils/gptSlice';

import { SUPPORTED_LANGUAGE } from '../utils/constant';
import { changeLang } from '../utils/configSlice';


const Header = () => {
    const nave=useNavigate()
    const user=useSelector((store)=>store.user)
    const dispatch=useDispatch()

   

   const   handleSignout=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
         nave("/")
      }).catch((error) => {
        // An error happened.
      });
    }

    const HandleGptSearch=()=>{
     dispatch(tooglegptsearchview())


    }

    const handlelangchange=(e)=>{
      dispatch(changeLang(e.target.value))
    }
  return (
   
  <div className='absolute w-screen bg-gradient-to-b from-black  px-8 py-2 z-10 flex justify-between '>
     
        <img className='w-44'  src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'   
             alt='logo'></img>

  

    
{  user &&(
      <div className=' flex p-2' >
      <select onChange={handlelangchange} className='rounded-md bg-gray-500 text-white m-2'>
      {SUPPORTED_LANGUAGE.map(lang=> <option key={lang.identifire} value={lang.identifire}>{lang.name}</option>)}
        

      </select>
      <button onClick={HandleGptSearch} className='px-4 py-2 mx-4 bg-purple-800 text-white rounded-md'>
    GPT Search
</button>
     
      <img className="w-12 h-12" alt='usericon' src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
    />
    
       <button onClick={handleSignout} className='font-bold text-white '>(sign out)</button>
    </div>
)
}
    </div>

    
  
   
  )
}

export default Header

