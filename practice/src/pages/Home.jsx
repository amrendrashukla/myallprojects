import React, { useContext } from 'react'
import Trail from '../component/Trail'
import CounterContext from '../context/CounterContext'

const Home = () => {
   let store = useContext(CounterContext)

  return (
    <div>
      Home page

   {store.count}   
      

      <Trail  title="trial page"/>
    </div>
  )
}

export default Home
