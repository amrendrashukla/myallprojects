import logo from './logo.svg';
import './App.css';
  import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar'
import SingleRecipe from './components/SingleRecipe';
import Recipe from './pages/Recipe';

import Practice from './pages/practice';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        
            <Routes>
                {/* <Route path='/' element={<Home/>}/>
                <Route path='/single' element={<SingleRecipe/>}/> */}
                <Route path='/practice' element={< Practice/>}/>
                <Route path='/raceipe' element={<Recipe/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
