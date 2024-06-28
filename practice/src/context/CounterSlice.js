import React, { useState } from 'react'
import CounterContext from './CounterContext'

const CounterSlice = (props) => {
    const [count, setcount] = useState(10);
  return (
    <CounterContext.Provider value={{count,setcount}}>
            {props.children}
    </CounterContext.Provider>
  )
}

export default CounterSlice
