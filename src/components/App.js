import React, {useEffect, useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
const [text,setText]=useState("redColor")

const change=()=>{
if(text==="redColor"){
  setText("blueColor");
}
else{
  setText("redColor");
}
}
  return (
    <div id="main">
      <p className={text}>Newton School</p>
      <button id='button' onClick={change}>Change Style</button>
    </div>
  )
}


export default App;
