import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import LearnProp from './pages/LearnProp';
import Navbar from './component/Navbar';
import { useState } from 'react';
import Counter from './pages/Counter';
import PracticeReducer from './pages/PracticeReducer';
import TodoList from './pages/TodoList';


function App() {
 
  return (
    <>
    <BrowserRouter>

  
    <Navbar/>
    <Routes>
   <Route path='/' element={<TodoList/>}/>
   <Route path='/counter' element={<Counter/>}/>
    </Routes>
    </BrowserRouter>
    </>

  
  
  );
}

export default App;
