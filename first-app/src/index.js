import React from "react"
import root from "react-dom"

let facts = (
    <div>
        <img src="./react-logo.png" alt="React logo from scrimba"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

function temporary(){
    return (facts)
}



root.render(temporary(), document.getElementById('root'));