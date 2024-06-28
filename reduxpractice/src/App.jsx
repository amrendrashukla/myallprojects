import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/CounterSlice';
import TodoList from './TodoList';

function App() {
  let dispatch = useDispatch()
  const item = useSelector((state) => state.counter)
  console.log(item.value)

  const handleIncrement = ()=>{
    dispatch(increment())
  }
  return (
    <div className="App">
        
{/* 
      <button onClick={handleIncrement}>increment</button>
      <p>{item.value}</p>
      <button onClick={()=>dispatch(decrement({name:"abc"}))}>decrement</button> */}
      <TodoList/>
    </div>
  );
}

export default App;
