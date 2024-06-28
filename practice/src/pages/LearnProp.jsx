import React, { useEffect } from 'react'

const LearnProp = (props) => {
    console.log(props)


    let details = {
        name:"one",
        age:34

    }
    console.log(details)
  
    useEffect(()=>{
        props.data(details)
    },[])

  return (
    <div>
      Learn page
    
    </div>
  )
}

export default LearnProp
