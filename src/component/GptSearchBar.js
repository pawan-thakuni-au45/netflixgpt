import React from 'react'
import {lang} from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langkey=useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%] '>
    
    <form className='  m-6 flex justify-center'>
    <input className ="  p-4 m-4" type='text' placeholder= {lang[langkey].gptsearchPlaceholder}></input>
    <button className='  py-2 px-4 text-white m-4 bg-red-700'>
    {lang[langkey].search}
    
    </button>
  
  </form></div>
  )
}

export default GptSearchBar