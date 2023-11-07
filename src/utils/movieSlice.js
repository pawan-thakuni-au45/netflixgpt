import {createSlice} from "@reduxjs/toolkit"
const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailervideo:null
    },
     reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopolureMovie:(state,action)=>{
            state.polplureMovies=action.payload;
        },
        addTopRatedMovie:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailervideo=action.payload;

        }

     }

})

export const {addNowPlayingMovie, addTrailerVideo,addPopolureMovie,addTopRatedMovie}=movieSlice.actions
export default movieSlice.reducer