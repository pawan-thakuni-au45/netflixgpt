import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    //to get the data from store i we will use useSelector hook

    const movie=useSelector((store)=>store.movies?.nowPlayingMovies)

     if(!movie) return
    const mainMovie=movie[0];
    console.log(mainMovie);
    const {original_title,overview,id}=mainMovie
  return (
    <div>
    <VideoTitle title={original_title} overview={overview}/>
    <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer