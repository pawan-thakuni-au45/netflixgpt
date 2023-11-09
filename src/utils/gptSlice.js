import { createSlice } from "@reduxjs/toolkit";

const gptslice=createSlice({


    name:"gptslice",
    initialState:{
        showgptsearch:false
    },

    reducers:{
        tooglegptsearchview:(state,action)=>{
            state.showgptsearch=!state.showgptsearch
        }
    }





})
export const {tooglegptsearchview}= gptslice.actions
export default gptslice.reducer