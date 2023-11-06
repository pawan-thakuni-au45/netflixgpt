import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import useMovieTrailer from '../hooks/useMovieTrailer'


const VideoBackground = ({movieId}) => {
    const trailervideo=useSelector((store)=>store.movies?.trailervideo)
   
  useMovieTrailer(movieId)

    
           
  return (
    <div >
    <iframe  className='w-screen aspect-video'
    
     src={"https://www.youtube.com/embed/"+trailervideo?.key+"?&autoplay=1&mute=1"} 
     title="YouTube video player" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"> 
    </iframe>
    </div>
  )
}

export default VideoBackground




// {
//     "iso_639_1": "en",
//     "iso_3166_1": "US",
//     "name": "Final Trailer",
//     "key": "X4d_v-HyR4o",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Trailer",
//     "official": true,
//     "published_at": "2023-08-30T19:00:10.000Z",
//     "id": "64ef92d0caa50800ab716a20"
//   },