import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  let searchRef = useRef()

  const [items, setitems] = useState([]);
  const [value, setvalue] = useState("biryani");
  console.log(items)
  console.log(value)

  async function getData(){

      let res = await fetch(`https://api.edamam.com/search?q=${value}&app_id=b99aa791&app_key=9802e02f757e9f30d12609ad0a931b60`)

      // let res = await fetch('https://dummyjson.com/products')

      let data = await res.json()
      console.log(data.hits)
      setitems(data.hits)


  }

useEffect(()=>{
  getData()
},[value])





const handleSearch = (e)=>{
    e.preventDefault()
 
    let ans = searchRef.current.value
    console.log(ans)
    setvalue(ans)
} 


const handleClick = (ans)=>{
  console.log(ans)
}

  return (
  <div className='homepage'>
    <form className="d-flex my-3 w-50 m-auto" role="search">
  <input ref={searchRef} className="form-control me-2 col-md-4" type="search" placeholder="Search" aria-label="Search" />
  <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
</form>

      <div className='row d-flex justify-content-center gap-2'>
      
      {items.map((ele)=>{
       return <div key={ele.recipe.label} className="card" style={{width: '18rem'}}>
   <img src={ele.recipe.image} className="card-img-top" alt="..." />
   <div className="card-body">
     <h5 className="card-title text-truncate">{ele.recipe.label}</h5>
     <Link to="/single" state={ele}  className="btn btn-primary">View Recipe</Link>
     {/* <button onClick={()=>handleClick(ele)}>clickk me</button> */}
   </div>
 </div>
 
      })}
     </div> 
  </div>
  )
}

export default Home
