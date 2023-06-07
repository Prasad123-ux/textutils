import React, { useState } from 'react';
import PropTypes from 'prop-types'
export default function Textform(props) {
  const handleUpClick=()=>{
    console.log("uppercase was clicked" +text);
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("props","success");
  }
   
const handleLoClick=()=>{
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("converted to lowercase", "success");
}
const handleClearClick=()=>{
  let newText=" ";
  setText(newText);
  props.showAlert("Clear the text", "success");

}
const handleOnChange=(event)=>{
  console.log("on change")
  setText(event.target.value)
 }
  const copy=()=>{
    console.log("i am copy");
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied text", "success");
    
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/()/);
    setText(newText.join(" "))
    props.showAlert("Extra space removed", "success");
  }

  
  const [text,setText] = useState(" ")
return (
    <>
    <div className=" container my-2" >
      <h3>Enter text to analyze</h3>
      <div className="mx-3">
    <textarea className="form-control"  value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'grey':'white',color:props.mode==='dark'?'black':'white'}} id="myBox" rows="8"></textarea>
  </div>
  
  <button className="btn-btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn-btn-secondary mx-2" onClick={handleLoClick}>convert to Lowercase </button>
  <button className="btn-btn-secondary mx-2" onClick={handleClearClick}>clear text</button>
  <button className="btn-btn-secondary mx-2" onClick={copy}>copy text</button>
  <button className="btn-btn-secondary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
  {/* <button className="btn btn-primary mx-2"   onClick={changeMode}>changeMode</button> */}
</div>
<div className="container my-2" >
      <p> your text summary</p>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p> time to read above words is  { 0.008*text.split(" ").length} minute</p>
      <h3>{text.length>0?text:"enter something in the text box to previw it here"}</h3>
    </div>
    </>
)}

   

Textform.propTypes = {
      mode: PropTypes.string.isRequired,
      toggleMode: PropTypes.func,
      showAlert:PropTypes.func
      
}
