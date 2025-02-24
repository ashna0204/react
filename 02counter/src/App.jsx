import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setcounter] =useState(15)
  // let counter =15
  const addvalue = () =>{
    setcounter((prevcounter)=> prevcounter + 1 )
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
  // setcounter(counter+1)
    console.log(counter);
    
  }
  const removevalue = () =>{
    setcounter(counter - 1)
    console.log(counter);
    
  }

  return (
    <>
    <h1>React course on counter{counter}</h1>
    <h2>Counter: {counter}</h2>
    <button onClick ={addvalue}>add value {counter}</button>
    <button onClick={removevalue}>remove value {counter}</button>{""}
    <footer>footer: {counter}</footer>
   </>
  )
}

export default App
