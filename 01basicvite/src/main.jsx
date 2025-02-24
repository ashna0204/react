import React from 'react'
// import { createRoot } from 'react-dom/client'
import  ReactDOM from "react-dom/client";
import App from './App.jsx'

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

//functional component
function MyApp(){
    return(
        <div>
            <h1>custom react</h1>
        </div>
    )
}
//JSX version
const AnotherElement = (
    <a href = "http://google.com" target='_blank'>Visit google </a>
)

//creating element in react

const areactElement = React.createElement(
    'a',
    {href:'http://google.com', target: "_blank"},
    'click to visit google'
    
)

//rendering component

ReactDOM.createRoot(document.getElementById('root')).render(
  
    areactElement
    // <App />
    // <MyApp />
    // AnotherElement

)
