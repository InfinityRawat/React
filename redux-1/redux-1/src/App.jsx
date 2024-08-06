import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';

import { CounterStore } from './store/CounterStore'

function App() {
  const counter = useSelector(state=>state.CounterSlice.value)

  return (
    <>
        <Provider store={CounterStore} >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>redux State count</h2>
       <h3>count = {counter}</h3>
       </Provider>

    </>
  )
}

export default App
