import React, { useRef } from 'react'
import {lang} from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai"
import { API_OPTIONS } from '../utils/constant'
import { addGptMoviesResults } from '../utils/gptSlice'

const GptSearchBar = () => {
  const dispatch=useDispatch()

    const langkey=useSelector(store=>store.config.lang)
    const searchext=useRef(null)
    
    //search movie in tmdb
    const searchMovieTmdb=async(movie)=>{
       const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS)

       const json=await data.json()
       return json.results
    }

    const handleGptsearch =async ()=>{
        // console. log(searchext.current.value);
        const getQuery="Act as a movie Recommendation system and suggest some movie for the query:"+searchext.current.value+".only gives me name of five movies,coma seperated like the example result giving ahead.Example Result:Gader,Sholey,Don,golmaal,krish"
//we fetch API over here
        const  getResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: getQuery }],
            model: 'gpt-3.5-turbo',
          });

          if(!getResults.choices){

          }
// console.log(getResults.choices?.[0]?.message?.content.split(","));
const gptMovies=getResults.choices?.[0]?.message?.content.split(",")

//for each movie i will search TMDN API
const promiseArray=gptMovies.map(movie=>searchMovieTmdb(movie))
//[promise,promise,promise,promise,promise]

const temdResults=await Promise.all(promiseArray)
// console.log(temdResults);

dispatch(addGptMoviesResults({movieName:gptMovies  ,temSearch:temdResults}))


    }
  return (
    <div className='pt-[10%] '>
    
    <form className='  m-6 flex justify-center' onSubmit={(e)=>e.preventDefault()}>
    <input ref={searchext}  className ="  p-4 m-4" type='text' placeholder= {lang[langkey].gptsearchPlaceholder}></input>
    <button className='  py-2 px-4 text-white m-4 bg-red-700' onClick={handleGptsearch}>
    {lang[langkey].search}
    
    </button>
  
  </form></div>
  )
}

export default GptSearchBar


// {
//   "page": 1,
//   "results": [
//     {
//       "adult": false,
//       "backdrop_path": "/8YboYnoujBeWv4Galqnb7I0h9jf.jpg",
//       "genre_ids": [
//         35,
//         10749,
//         10751
//       ],
//       "id": 58128,
//       "original_language": "hi",
//       "original_title": "अंदाज़ अपना अपना",
//       "overview": "Two slackers competing for the affections of an heiress inadvertently become her protectors from an evil criminal.",
//       "popularity": 10.261,
//       "poster_path": "/a0GV2V3yif2DbsMCSBrivvSHUWQ.jpg",
//       "release_date": "1994-04-11",
//       "title": "Andaz Apna Apna",
//       "video": false,
//       "vote_average": 6.754,
//       "vote_count": 197
//     }
//   ],
//   "total_pages": 1,
//   "total_results": 1
// }