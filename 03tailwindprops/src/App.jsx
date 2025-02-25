import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name: 'ashna',
    age:'23'
  }
  let newArr =[1,3,4,5,6,7]

  return (
    <>
      <Header />
      <h1 className=" bg-cyan-600 p-3 rounded-md">Vite with Tailwind css</h1>
      <Card
        username="cute orange cat"
        myArr={newArr}
        imgsrc="public/download.jpeg"
      />
      {/* key and value*/}
      <Card post="Korea" />
      <Card />
    </>
  );
}

export default App
