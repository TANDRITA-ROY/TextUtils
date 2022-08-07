import React, { useState } from 'react'



export default function Textbar(props) {
 
    const [text, setText]=useState("")

    const SetUpText= () =>{       
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Text Converted to Upper Case!", "success")
    }
    const SetLoText= () =>{       
      let newText=text.toLowerCase()
      setText(newText)
      props.showAlert("Text Converted to Lower Case!", "success")
  }
  const Clear= () =>{       
    let newText=''
    setText(newText)
    props.showAlert("Text Cleared!", "success")
}
    const Chages= (event) =>{
        setText(event.target.value)
    }
    const copy= () =>
    {
  let txt = document.getElementById('exampleFormControlTextarea1')
 // txt.select()
  navigator.clipboard.writeText(txt.value)
 // document.getSelection().removeAllRanges()
  props.showAlert("Text Copied to clipboard!", "success")
    }
  return (
   <>
<div className="container mb-3" style={{backgroundColor:props.mode==='dark'?'#404040':'white',
color:props.mode==='dark'?'white':'black'}}>
  <h1 className='mb-3'>{props.Heading}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'#404040':'white',
color:props.mode==='dark'?'white':'black'}} onChange={Chages} value={text} rows="10"></textarea>
  <button type="button" disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={SetUpText}>Convert To UpperCase</button>
  <button type="button" disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={SetLoText}>Convert To LowerCase</button>
  <button type="button" disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={Clear}>Clear Text</button>
  <button type="button" disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={copy}>Copy Text</button>

</div>
<div className="container mb-3" style={{backgroundColor:props.mode==='dark'?'#404040':'white',
color:props.mode==='dark'?'white':'black'}}>
<h1>Text Summary</h1>
<p>The text contanis {text.split(/\s+/).filter((elemnet)=>{return elemnet.length !== 0 }).length} words and {text.length} characters</p>
<p>The above text takes time to read for avarage people {0.008 * text.split("").length} minitues</p>
<h2>Preview</h2>
<p>{text.length >0 ? text : "Nothing to Preview"}</p>
</div>
</>
  )
}
