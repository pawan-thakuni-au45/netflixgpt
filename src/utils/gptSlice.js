import { createSlice } from "@reduxjs/toolkit";

const gptslice=createSlice({


    name:"gptslice",
    initialState:{
        showgptsearch:false,
     
        movieName:null,
        temSearch:null

    },

    reducers:{
        tooglegptsearchview:(state,action)=>{
            state.showgptsearch=!state.showgptsearch
        },
        addGptMoviesResults:(state,action)=>{
            const {movieName, temSearch}=action.payload
            state.movieName=movieName
            state.temSearch=temSearch

        }
    }





})
export const {tooglegptsearchview,addGptMoviesResults}= gptslice.actions
export default gptslice.reducer