
import {useSelector,useDispatch}from 'react-redux'
import { increment } from '../store/CounterSlices'


export default  Counter = ()=>{

    // const counter = useSelector(state=>state.CounterSlice)
        return(
            <>
                <div>
                    <h1> Counter is {counter}</h1>
                </div>
            </>
        )
}