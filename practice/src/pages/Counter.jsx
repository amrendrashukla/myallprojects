import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'

const Counter = () => {

    let store = useContext(CounterContext)
    
    console.log(store)
    const handleIncrement = () =>{
        // console.log("hello")
        store.setcount(store.count+1)
    }
    const handledecrement=()=>{
      store.setcount(store.count-1)
    }
  return (
    <div>
      Counter page

      <h1>{store.count}</h1>

      <button onClick={handleIncrement}>increment</button>
      <button onClick={handledecrement}>decrement</button>
    </div>
  )
}

export default Counter
