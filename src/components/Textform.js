import React, { useState } from 'react'


export default function Textform(props) {
    const handelUpClick = () => {
        console.log("uppercase was clicked" + text);
        //setText("wow that is incredible")  // change the default value of text area by State //
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelOnChange = (event) => {
        console.log("On Changed");
        setText(event.target.value);  //changed deafult value + typed value by user //
    }
    const [text, setText] = useState(''); // Default value of text area // declare text as a state variable
    return (
        <>
            <div className="container">

                <h1>{props.heading}</h1>
                <div className="form-group">

                    <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>

                </div>
                <button className='btn btn-primary mt-2' onClick={handelUpClick}>Convert to Uppercase</button>
            </div>
            <div className="container my-2">
                      <h1>This is your text summary</h1>
                      <p>{text.split("").length}words and {text.length} characters</p>
            </div>

        </>





    )
}
