import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
let seconds = 0;

setInterval(() => {
  seconds = seconds + 1,

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home time = {seconds}/>
  </React.StrictMode>,
)
}
  ,1000)



