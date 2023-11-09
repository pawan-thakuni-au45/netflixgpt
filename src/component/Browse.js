import React, { useEffect, useState } from 'react'
import Header from './Header'

import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopolureMovies from '../hooks/usePopolurMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


const Browse = () => {
const showgptsearch=useSelector(store=>store.gpt.showgptsearch)
  //tryign to fetch data from TMDB API and update store all movies
  //i will create anew hook and i will extract all data in that hook to make my redabilit better,lets create a new folder ,custom hook

  //this code fetching the data and putting those data in the store 
  

  useNowPlayingMovies()
  usePopolureMovies()
  useTopRatedMovies()
 


  return (
    <div >
     <Header/>

     {

      showgptsearch?(
        <GptSearch/>
      ):(
        <>
        <MainContainer/>
        <SecondryContainer/>
        </>
      )
     }
    
    </div>
  )
}

export default Browse