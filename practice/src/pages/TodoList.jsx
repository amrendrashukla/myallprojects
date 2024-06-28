import React, { useReducer, useRef } from 'react'

const TodoList = () => {

    let snRef = useRef();
    let nameRef = useRef();
    let ageRef = useRef();


    let reducers = (state,action)=>{
        if(action.payload==="add karwa ke do"){
            return {
  
                arr:[...state.arr,action.value]
            }
        }
    }

    let initialState = {
        arr: [
            {
                id:1,
                name:"one",
                age:34
            },
            {
                id:2,
                name:"two",
                age:31
            },
        ]
    }

   const [state, dispatch] = useReducer(reducers,initialState)



    const handleADD=(e)=>{
        e.preventDefault()
      let obj ={
        id:snRef.current.value,
        name:nameRef.current.value,
        age:ageRef.current.value
      }

      console.log(obj)
      dispatch({payload:"add karwa ke do",value:obj})
    }
  return (
    <div>
      <h1>Todo list</h1>
      <form action="">
        <input type="number" placeholder='sn' ref={snRef} />
        <input type="text" placeholder='name' ref={nameRef} />
        <input type="number" placeholder='age' ref={ageRef}/>
        <button onClick={handleADD}>Add</button>
      </form>


      {state.arr.map((ele)=>{
        return <div style={{display:"flex",gap:"30px"}}>
              <span>{ele.id}</span>
              <span>{ele.name}</span>
              <span>{ele.age}</span>
        </div>
      })}
    </div>
  )
}

export default TodoList
