import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='my-20 pt-[20%] mx-10 text-white absolute w-screen aspect-video'>
     <h1 className='text-6xl font-bold text=black '>{title}</h1>
     <p className='py-6 w-1/2'>{overview}</p>
     <div className='px-10'>
    <button className='bg-gray-500 py-4 rounded-xl font-bold px-16 hover:bg-opacity-40 '>▶️ Play</button>
     <button className='mx-2 bg-gray-500 py-4 rounded-xl font-bold px-16'>more info</button>
     </div>
    </div>
  )
}

export default VideoTitle