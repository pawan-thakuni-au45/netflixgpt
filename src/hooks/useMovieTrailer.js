 import { useDispatch } from "react-redux"
 import { useEffect } from "react"
 import { API_OPTIONS } from "../utils/constant"
 import { addTrailerVideo } from "../utils/movieSlice"


 const useMovieTrailer=(movieId)=>{

    const dispatch=useDispatch()

    //fetching trailer videos and updating the store
    

    const VideoTrailer=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/507089/videos?language=en-US' ,API_OPTIONS)
       const json=await data.json()
       console.log(json);
      const filterdata=json.results.filter((list)=>list.type==="Trailer")
      const trailer=filterdata[0]
      console.log(trailer); 
      dispatch(addTrailerVideo(trailer))

    }

    useEffect(()=>{
   VideoTrailer()
    },[])


 }
 export default useMovieTrailer