import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convereted to uppercase!", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convereted to lowercase!", "success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleCopyText = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces Removed!", "success");
    }
    const wordCount = (temp)=>{
        if(temp.match(/(\w+)/g) === null){
            return 0;
        }
        else{
            return temp.match(/(\w+)/g).length;
        }
    }
    const[text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>  
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>          
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>          
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>          
            <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy text</button> 
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button> 

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{wordCount(text)} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} Minutes Read. </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox about to preview it here"}</p>
        </div>
        </>
    )
}
