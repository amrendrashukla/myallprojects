import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    let item = useSelector((state)=>state.todo)
    console.log(item.arrr)
  return (
    <div>
      
    </div>
  )
}

export default TodoList
