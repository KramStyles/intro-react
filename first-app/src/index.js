import React from "react"
import root from "react-dom"
import './app.css'
import s from './style.module.css'

function Temporary() {
    return (facts)
}



function Main(){
    return (
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    )
}

function Footer(){
    return (
        <footer>© 2022 Michael development. All rights reserved.</footer>
    )
}
let facts = (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
)


root.render(
    <Temporary/>, document.getElementById('root'));