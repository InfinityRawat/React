
import {configureStore} from '@reduxjs/toolkit'
import { CounterSlice } from './CounterSlices'

export const CounterStore = configureStore({
    reducer:{
        CounterSlice :CounterSlice
    }
}
);