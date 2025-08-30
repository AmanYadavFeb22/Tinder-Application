import { createSlice } from "@reduxjs/toolkit";

const connectionSloce=createSlice({
    name:'connection',
    initialState:null,
    reducers:{
        addConnection:((state,action)=>{
             return action.payload
        }),
        removeConnection:((state,action)=>{
                 return null
        })
    }
})

export const{addConnection,removeConnection}=connectionSloce.actions
export default connectionSloce.reducer