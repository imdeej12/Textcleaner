import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


function App() {

  const [mode, setMode] = useState('light');  // controle of dark mode 

 
  const [alert, setAlert]= useState(null)
   //------------for Alert message showing-----------------
  const showAlert = (message, type) =>{
      
      setAlert({
      msg: message,
      type: type,  
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1300);

  }

 const toggleMode =  ()=>{
  
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor = 'rgb(13 22 36)'
    showAlert("Dark mode has been enabled", "Success")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white'
    showAlert("Dark mode has been Disable", "Success")
  }
  
  }


  return (
    <div>
      {/* <Navbar title="Textutils"  about="About Us"  contact="Contact us" mode={mode}/> */}

          <Navbar title="TextCleaner"   mode={mode} toggleMode={toggleMode}/>
          <Alert alert= {alert}/>

        <div className="container my-3"> 
          <TextForm showAlert={showAlert} heading= " Enter the text here to analyse "  mode={mode}/>
          {/* <About/> */}
        </div>
    </div>
  );
}

export default App;


