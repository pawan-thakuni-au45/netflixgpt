import React, { useEffect } from 'react'
import Header from './Header'

import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopolureMovies from '../hooks/usePopolurMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'


const Browse = () => {
  //tryign to fetch data from TMDB API and update store all movies
  //i will create anew hook and i will extract all data in that hook to make my redabilit better,lets create a new folder ,custom hook

  //this code fetching the data and putting those data in the store  

  useNowPlayingMovies()
  usePopolureMovies()
  useTopRatedMovies()


  return (
    <div className='bg-gradient-to-b from-black z-10'>
     <Header/>
     <MainContainer/>
     <SecondryContainer/>
    </div>
  )
}

export default Browse