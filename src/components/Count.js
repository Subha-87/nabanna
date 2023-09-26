import React from 'react'
import { useState } from 'react'

function Count(props) {

    const [count, setCount] = useState(0)

    const clickFun = () =>{
        //console.log("clicked");
        setCount( count + 1);
    }
  return (
    <div>
             <h1>{count}</h1>
           <button className='btn btn-info' onClick={clickFun}>Click BTN 1</button> 
           
            <h2>{props.numset}</h2>
            <button className='btn btn-info' onClick={props.click}>Click BTN 2</button>

    </div>
  )
}

export default Count
