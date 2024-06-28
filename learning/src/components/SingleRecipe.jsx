import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SingleRecipe = () => {

  let location = useLocation();
  console.log(location.state.recipe)


  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-6  d-flex justify-content-center">
          <img src={location.state.recipe.image} alt=""  className='img-fluid'/>
        </div>
        <div className="col-md-6  d-flex flex-column align-items-center">
          <h3>{location.state.recipe.label}</h3>
          <h4>Dish Type: {location.state.recipe.dishType[0]}</h4>
          <Link to={location.state.recipe.url} className='btn btn-info'>See recipe method</Link>
          <div className="row w-100 d-flex justify-content-center mt-3 gap-2">
            <div className="col-md-3 bg-primary d-flex flex-column align-items-center pt-4">
              <b>Fat</b>
              <p>{Math.ceil(location.state.recipe.digest[0].total)} gm</p>
              
            </div>
            <div className="col-md-3 bg-info d-flex flex-column align-items-center pt-4">
            <b>{location.state.recipe.digest[2].label}</b>
            <p>{Math.ceil(location.state.recipe.digest[2].total)} gm</p>
            </div>
            <div className="col-md-3 bg-warning d-flex flex-column align-items-center pt-4">
              <b>Vitamin</b>
              <p>{Math.ceil(location.state.recipe.digest[23].total)} gm</p>
            </div>
          </div>
        </div>
      </div>

     
      <div>

      <div className="row mt-3">
        <div className="col-md-6 d-flex flex-column align-items-center">
        <h3>Ingrediants</h3>
        <ul>
          {location.state.recipe.ingredientLines.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
        </div>
        <div className="col-md-6">
          <h2>Health Labels</h2>
          <ul>
            {location.state.recipe.healthLabels.map((str)=>{
              return <li>{str}</li>
            })}
          </ul>
        </div>
      </div>

      
      </div>
    </div>
  )
}

export default SingleRecipe
