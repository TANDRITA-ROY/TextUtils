
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
 import About from './components/About';
import Textbar from './components/Textbar';
import Alert from './components/Alert';
 import {
   BrowserRouter as Router,
   Routes,
   Route,
 } from "react-router-dom";


function App() {
  const  [mode, setMode]= useState('light')
 const [alert, setAlert]= useState(null)
 const showAlert= (message, type) => {
 setAlert(
   {
     message:message,
     type: type
   })
   setTimeout(() => {
     setAlert(null)
   }, 1500);
 }


   const toggleMode =() => {
     if (mode === 'light')
     {setMode('dark');
     document.body.style.backgroundColor='#404040'
     showAlert("Dark Mode enaled!", "success")

     }
     else {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode enaled!", "success")
     }
      
   }

  return (
    <>
   <Router> 
    <Navbar title="Textutils" AboutText="About" mode={mode} toggleMode={toggleMode} />
    
    <Alert alert={alert}/>
    <div className="container my-3">
     <Routes>
          <Route  exact path="/About" element={ <About  mode={mode}/> }/> 
          <Route exact path="/"  element={<Textbar Heading="Try TextUtils- Upper lo Lower Case, Lower to Upper Case, Remove Extra Space" showAlert={showAlert} mode={mode}/>} />       
     </Routes>
     </div>
  </Router> 
</>
  );
}

export default App;
