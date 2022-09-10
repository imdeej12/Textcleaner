import React, {useState} from 'react';


export default function TextForm(props) {

  const [text, setText] = useState("Enter text here")  //   text state ============

//--------------for UpperCase-----------------------
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Contverted to upperCase", "Success");
    }

//--------------for LowerCase-------------------
    const handleLowClick = () =>{
            // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Contverted to LowerCase", "Success");
    }

//-------------for Clear-Text-----------------
    const handleClearText = () =>{
      // console.log("clear text was clicked" + text)
        let newText = '';
        setText(newText);
        props.showAlert(" Text Cleared", "Success");

    }
//------------for copy-text ----------------
    const handleCopyText = () =>{
      // console.log("This is copy" + text);
      var text = document.getElementById("boxId");
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert("Text Copied", "Success");
    }
    
//-----------for remove Extra Spaces---------

const handleExtraSpaces = () =>{
  // console.log("ExtraSpaces was clicked" + text)
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are removed", "Success")

}
    
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);

    }

  

   return (
    <>
    <div className='container' style={{color: props.mode==='dark'? '#897575' : 'grey'}}>
      <h1>{props.heading}</h1>
   
{/*  listen onChange event is for typing in the text box whitout using them we cannot text in that box*/}

         <div className="mb-3"> 
           <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#30578d' : 'white',color: props.mode==='dark'? 'white' : '#30578d'}} id="boxId" rows="9"></textarea>
         </div>
         
           <button className="btn btn-primary " onClick={handleUpClick}>Uppercase</button>
           <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Lowercase</button>
           <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
           <button className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
           <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>

    <div className="container" style={{color: props.mode==='dark'? 'white' : '#30578d'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
        <h2>Preview text here...</h2>
        <p>{text.split(" ").length>0?text:"Enter Somthing in the text box"}</p>
    </div>

    
</>

  )
}
