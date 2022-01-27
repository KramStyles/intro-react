// import dependencies
import React from "react"
import root from "react-dom"

// Import external components
import './app.css'
import head from './Header'
import foot from './Footer'
import main from './Main'

let facts = (
    <div>
        <head/>
        <main/>
        <foot/>
    </div>
)

const fact = (
    <div>Hello</div>
)

function Temporary() {
    return (fact)
}


root.render(
    <Temporary/>, document.getElementById('root'));