import React, { useReducer, useState } from 'react'

const PracticeReducer = () => {
    // const [x, setx] = useState(0);

    // let x =0

    let reducers = (state,action)=>{
        if(action ==="add krwa do"){
            return state+1
        }

        if(action ==="ghata dena"){
            return state-1
        }
    }
 
  
    const [state , dispatch] =  useReducer(reducers,0)

    const handleIncrement = ()=>{
        // x = x+1
        // console.log(x)
        // let value = x+1;
        // setx(value)

        dispatch("add krwa do")
    }
  return (
    <div>
        
        <button onClick={handleIncrement}>Increment</button>

        <span>{state}</span>
        <button onClick={()=>dispatch('ghata dena')}>Decrement</button>
    </div>
  )
}

export default PracticeReducer
