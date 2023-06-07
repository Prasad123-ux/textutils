
 import React,{ useState } from 'react';
import './App.css';
import Navbar from './componants/Navbar';
 import Textform from './componants/Textform';
import Alert from './componants/Alert';
//  import About from './componants/About';
//  import {Switch} from "react-router";
//  import{
//   BrowserRouter,
//   Routes,
//   Route
//   }from "react-router-dom";
 

function App() {
const [mode,setMode] = useState("dark")
const [alert,setAlert]=useState("alert")


const showAlert=(message,type)=>{
  setAlert({
msg:message,
type:type
  
})

setTimeout(()=>{
  setAlert(null);
  }, 3000);

}
const toggleMode=()=>{
if(mode==="light"){
    setMode("dark");
    document.body.style.backgroundColor='grey'
    showAlert("dark mode has been enabled","success")
    document.title='Textutils - light Mode'
    setInterval(()=>{
      document.title="textutils is Amazinf Mode"
    },500);
    setInterval(()=>{
      document.title='Install textutils Now'
    },1000);
  }else{
    setMode("light");
    document.body.style.backgroundColor='white'
    // text.body.style.color="red";
    
    showAlert("light mode has been enabled","success")
    document.title= 'Textutils - Dark Mode';
  }
}

  return(
    <>
  
  
    <Navbar title="Textutils" aboutText="About"  homeType="Home" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Textform showAlert={showAlert} head="Example Textarea" mode={mode} />
    
   {/* <div className="container my-3">  */}
  {/* <BrowserRouter basename="/About"> */}
  {/* <Routes> */}
  {/* <Route exact path="/about" element={<About/>}/> */}
    {/* <Route index element={ <Navbar title="Textutils" aboutText="About"  homeType="Home" mode={mode} toggleMode={toggleMode}/>}/> */}
    {/* <Route exact path="/Textform" element={<Textform showAlert={showAlert} head="Example Textarea" mode={mode} />}/> */}
    {/* </Routes> */}
{/* </BrowserRouter> */}
 {/* </div>  */}
   </>

  )
}


  

    



export default App;
