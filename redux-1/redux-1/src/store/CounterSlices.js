
import {createSlice} from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
    initialState:{ value: 0 },
    name: "CounterSlice",
    reducers:{
        increment: (state)=>state+1,
        decrement: (state)=>state-1
    }
})


export const {increment,decrement} = CounterSlice.actions
export default CounterSlice.reducer