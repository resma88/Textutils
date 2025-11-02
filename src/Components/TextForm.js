//here we use hooks,state and handling events
import React,{useState} from 'react'

export default function TextForm(props) {

const handleUpCase = () =>{
    //console.log("clicked handleUpCase");
      setHistory([...history, text]);
     if(text.trim().length>0){
    let newText = text.toUpperCase();
      setText(newText);
       props.showAlert("Converted to uppercase! ","success");}
       else{
        props.showAlert("Please enter some text before converting!", "warning");}
       }


const handleLoCase = () =>{
      setHistory([...history, text]);
    console.log("clicked handleUpCase");
    let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase! ","success");
}


const handleClearText = () =>{
    setHistory([...history, text]);
    let newText = "";
      setText(newText);
      props.showAlert("Text cleared! ","success");
     
}

const handleCopy = () =>{
   if (text.trim().length > 0) {
  // var text = document.getElementById("myBox");   // DOM way
  // text.select();
  // navigator.clipboard.writeText(text.value);
   navigator.clipboard.writeText(text);
  props.showAlert("Copy to clipboard! ","success");}
   else {
    props.showAlert("Nothing to copy!", "warning");
  }
}

const handleExtraSpace = () =>{
    setHistory([...history, text]);
 // console.log("remove extra");
    let newText = text.split(/[ ]+/);// here we use regex [] (remove space ,tab ,new line ) +(one or more)
      setText(newText.join(" "));
      props.showAlert("Extra spaces remove! ","success");
}



const handleOnChange =(event) =>{ //this function to write text on text area
   // console.log("handleOnChange ");
    setText(event.target.value);
}

const handleUndo = () => {
  if (history.length > 0) {
    const previousText = history[history.length - 1];
    setText(previousText);
    setHistory(history.slice(0, -1)); // remove last entry
    props.showAlert("Undo successful!", "info");
  } else {
    props.showAlert("Nothing to undo!", "warning");
  }
};


  const [text, setText] = useState("");
 const [history, setHistory] = useState([]);


  return (
    <>
    <div className='container'style = {{color:props.mode === 'dark'?'white':'black'}}>
      <div className="mb-3">
           <h1>{props.heading}</h1>
           <textarea className="form-control"  value= {text}  style = {{backgroundColor:props.mode === 'dark'?'grey':'white',
              color:props.mode === 'dark'?'white':'black'}} onChange ={handleOnChange} id="myBox" rows="6"></textarea>
      </div>
   
    <button className='btn btn-primary mx-2' onClick={handleUpCase}>Convert to uppercase</button>
    <button className='btn btn-primary mx-2' onClick={handleLoCase}>Convert to lowercase</button>
    <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear text</button>
    <button className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy</button>
    <button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpace}>Remove Extra spaces</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleUndo}> Undo</button>

   </div>
    <div className="container my-3" style = {{color:props.mode === 'dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        {/*<p>{text.split(" ").length} words and {text.length} characters </p>*/}
        <p>
        {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
        </p>

        <p>{  text.trim().length === 0 ? 0: (0.008 * text.trim().split(/\s+/).length).toFixed(2)  } minutes read</p>
        <h3>Preview</h3>
        <p>{text.trim().length>0?text:"Enter something in the textbox about to preview it here"}</p>
    </div>
    </>
  )
}


