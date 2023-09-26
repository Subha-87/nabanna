import { useState } from "react";
import Navbar1 from "./components/Navbar1";
import './App.css';
import Index from "./components/Index";
import Alert from "./components/Alert";
import Count from "./components/Count";
import About from "./components/About";
import Textform from "./components/Textform";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'





function App() {
     const color = {
          color: "green",
          backgroundColor: "black",
     }
     const [alert, setAlert] = useState(null);
     const showAlert = (message, type) => {
          setAlert({
               msg: message,
               type: type
          })
          setTimeout(() => {
               setAlert(null);
          }, 2000);
     };

     const [num, setNum] = useState(0);
     const clickFun2 = () => {
          console.log("clicked");
          setNum(num + 1);
     }


     const [mode, setMode] = useState('primary');

     const toggleFun = () => {
          console.log("mode btn clicked");
          if (mode === 'primary') {

               setMode('dark');
               document.body.style.backgroundColor = 'grey';
               showAlert("dark mode is enabled", "success");
          } else {
               setMode('primary');
               document.body.style.backgroundColor = 'white';
               showAlert("light mode is enabled", "success");
          }
     }



     return (

          <Router>

               <Navbar1 toggle={toggleFun} modeChange={mode} />
               <Alert alertmsg={alert} />
               <Routes>
                    <Route exact path="/home" element={<Index mode={color.color} back={color.backgroundColor} />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/count" element={<Count numset={num} click={clickFun2} />} />
                    <Route exact path="/text" element={<Textform />} />


               </Routes>


          </Router>



     );
}

export default App;
