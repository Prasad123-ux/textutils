import React, { useState } from 'react'

export default function About() {

   const [myStyle,setMyStyle]= useState({
      color:'black',
      backgroundColor:'white',
   

   })
   const [btntext, setBtnText] = useState("Enable dark mode")

    const toggleStyle = ()=>{
      if(myStyle.color==='black'){
         setMyStyle({
            color:'white',
            backgroundColor:'black',
             border:'6px solid white'
      
         })
      setBtnText("Enable light mode")
      }else{
         setMyStyle({
            color:' black',
            backgroundColor:'white'
         })
      setBtnText("Enable dark mode")
      }
   }
  return (
   <>
    <div className="container" style={myStyle}>
      <h1>Accordion</h1>

<button className="accordion my-3" style={myStyle}>Section 1</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion my-3" style={myStyle}>Section 2</button>
<div className="panel">
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion my-3" style={myStyle}>Section 3</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
    
    <div className="container">
    <button className="btn btn-primary my-3" type="button" onClick={toggleStyle}>{btntext}</button>
    </div>
   </div>
   </>
  )
}
