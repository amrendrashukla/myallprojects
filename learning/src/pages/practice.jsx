import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Practice = () => {
  let searchRef = useRef()

  const [items,setitems]=useState([]);
  console.log(items)
  const[value,setvalue]= useState(["shakes"])
   

    async function getData(){
       let res= await fetch(`https://api.edamam.com/search?q=${value}&app_id=b99aa791&app_key=9802e02f757e9f30d12609ad0a931b60`)
        let data = await res.json()
        // console.log (data)
        setitems(data.hits)
        


    }

    useEffect(()=>{
      getData()
    },[value])


    const handleSearch=(e)=>{
        e.preventDefault()
        let ans=  searchRef.current.value
        console.log(ans)
        setvalue(ans)
    }
   
     
    
  return (
    <div className='homepage'>
    <form className="d-flex my-3 w-50 m-auto" role="search">
  <input ref={searchRef} className="form-control me-2 col-md-4" type="search" placeholder="Search" aria-label="Search" />
  <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
</form>


 <div className='row d flex justify content center'>
  {
    items.map((ele)=>{
      return <div key={ele.recipe.label}className="card" style={{width: '18rem'}}>
  <img src= {ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <p>{ele.recipe.cautions}</p>
    <h5 className="card-title text-truncate">{ele.recipe.dishType[0]}</h5>
    <Link to='/raceipe' state={ele} className="btn btn-primary">Veiw Recipe</Link>
  </div>
</div>

    })
  }
 </div>
 </div> 
 
  )
  }



export default Practice

