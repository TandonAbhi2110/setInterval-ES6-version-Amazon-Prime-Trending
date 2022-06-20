import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  const [index,setIndex]=useState(0);
  const [disabledArr,setIsDisabledArr]=useState([true,false,true]);
  function sharedFunc(index)
  {
    console.log('index in shared Func',index)
    if(index==0)  //prev and restart disabled
      setIsDisabledArr([true,false,true]);
    else if(index==props.slides.length-1) //only next disabled
      setIsDisabledArr([false,true,false]);
    else
      setIsDisabledArr([false,false,false]);
  }
  function prev()
  {
    if(index!=0)
      setIndex(index-1);
    sharedFunc(index-1);
  }
  function next()
  {
    if(index!=props.slides.length-1)
      setIndex(index+1);
    sharedFunc(index+1);
  }

  function restart()
  {
    sharedFunc(0);
    setIndex(0);
  }
  return (
        <>
        <div id='slide'>
          <h1 data-testid="title">{props.slides[index].title}</h1>
          <p data-testid="text">{props.slides[index].text}</p>
        </div>
        <div id='navigation'>
          <button data-testid="button-prev" onClick={prev} disabled={disabledArr[0]}>Prev</button>
          <button data-testid="button-next" onClick={next} disabled={disabledArr[1]}>Next</button>
          <button data-testid="button-restart" onClick={restart} disabled={disabledArr[2]}>Restart</button>
        </div>
        </>
      )
}


export default App;
