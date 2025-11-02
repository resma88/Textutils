//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import AboutUs from './Components/AboutUs';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const[ mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode =() =>{
    console.log("tap switch");
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#131948';
      showAlert("Dark mode has been enabled", "success");
      //document.title= "Textutils-dark mode";

      // setInterval(()=>{
      //   document.title ="Textutils is Amazing";
      // },2000);
      //  setInterval(()=>{
      //   document.title ="Install Textutils";
      // },1500);
    }
    else{
      setMode('light');
         document.body.style.backgroundColor = '#fff';
         showAlert("Light mode has been enabled", "success");
        // document.title= "Textutils-light mode";
    }
  }

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type:type
   });
   setTimeout(()=>{
      setAlert(null);},1500
   );
  }


  return (
  <>
  <Router>
   <NavBar title = "TextUtiles" about = "About"  mode = {mode}  toggleMode ={toggleMode} />
   <Alert alert ={alert} />
   <div className="container  my-3"> 
       <Routes>
          <Route  path="/aboutus"  element={<AboutUs mode = {mode}/>}  />
         
          <Route path="/"
            element ={ <TextForm heading = "Enter the text to analyze"  showAlert = {showAlert} mode = {mode} />}/>
          
        </Routes>
   </div>
</Router>
  </>
  );
}

export default App;
