import React from 'react'
import { useState } from 'react';

export default function Index(props) {
    const myStyle = {
        width : "100%",
        height : "600px",
        border : "2px solid black",
        //backgroundColor : "lightblue",
    }

    const [theme, settheme] = useState({
        backgroundColor : "lightblue",
        color : "black"
                       })
    const ToggleEvent = () =>{
         //alert("btn is clicked");
         if(theme.backgroundColor === "lightblue"){

             settheme({backgroundColor : "grey" , color : "red"});
         }else{
            settheme({backgroundColor : "lightblue" , color : "black"});
         }
    }
  return (
    <div>
      <div className="container" style={{backgroundColor :theme.backgroundColor,color :theme.color }}>
         <h1>THIS IS HOME PAGE</h1>
         <button className='btn btn-primary' onClick={ToggleEvent}>Click Me</button>
         <p style={{color:props.mode , backgroundColor:props.back}}>Hi Welcome to IT Division</p>
      </div>
    </div>
  )
}
