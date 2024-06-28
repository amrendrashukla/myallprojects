import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import { useState } from 'react';
function App() {

  const [cartArr, setcartArr] = useState([]);
  console.log(cartArr)

  function getData(ans){
      console.log(ans)

      let find = cartArr.find((ele)=>ele.id === ans.id)
      console.log(find)
      if(!find){
        let obj = {...ans,quantity:1}
        setcartArr([...cartArr,obj])
      }
     
  }
  
  return (
   <>
   <BrowserRouter>
        <Navbar cartArr={cartArr}/>
      <Routes>
        <Route path='/' element={<Home getData={getData}  />  }/>
        <Route path='/single' element={<SingleProduct cartArr={cartArr} setcartArr={setcartArr} />}/>
        <Route path='/cart' element={<Cart cartArr={cartArr} setcartArr={setcartArr}/>}/>
      </Routes>
   </BrowserRouter>
   
   
   </>
  )
}

export default App;
