import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Faltu from './Faltu';

const Home = (props) => {
  // props --> with the help of props you can pass data from parent to child component

    const [arr, setarr] = useState([]);



    async function fetchApi (){
        let res = await fetch('https://dummyjson.com/products')
        let data = await res.json()
        console.log("ytes")
        console.log(data.products)
        setarr(data.products)
    }

 useEffect(()=>{
    fetchApi()
 },[])

 const handleAddToCart = (ans)=>{
  console.log(ans)
 
props.getData(ans)


 }

  return (
    <div className='row d-flex justify-content-center gap-2'>
      {/* <Faltu/> */}


{arr.map((ele)=>{
    return <div className="card" style={{width: '18rem'}}>
  <img src={ele.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.title}</h5>
   
    <Link to="/single" state={ele} className="btn btn-primary">View Detail</Link>
    <button onClick={()=>handleAddToCart(ele)} className='btn btn-success ms-2'>Add to cart</button>
  </div>
</div>

})}
    </div>
  )
}

export default Home
