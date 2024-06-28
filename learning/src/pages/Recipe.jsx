import React from 'react'
import{Link, useLocation} from 'react-router-dom'

const Recipe = () => {
    let location = useLocation();

    console.log(location.state.recipe)
  return (
    <div>
      <ul>
        {location.state.thumbnail}
      </ul>
    </div>
  )
}

export default Recipe
