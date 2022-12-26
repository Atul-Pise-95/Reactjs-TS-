import {createReducer, createSlice} from '@reduxjs/toolkit';

const counterSlice=createReducer({
    name:"counter",
    innitialState:{count:0},
    reducer:{
        //actionName:reducer
        increment:(action,{payload})=>{
            return {Count:state.count+(payload? parseFloat(action.payload):1)}
        },
        decrement:(action,{payload})=>{
            return {Count:state.count-(payload? parseFloat(action.payload):1)}
        },
        reset:()=>({count:0})
    }
})


export default counterSlice;