import React from 'react'
import ReactDOM from "react-dom/client"
import './style/styles.css'
import './style/mobileStyle.css'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'
import Nav from './components/Nav'



function App(){
    return(
        <div className='section'>
            <Nav/>
            <Home/>
            <About/>
            <Works/>
            <Contact/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);