import React from "react"
import root from "react-dom"
import styles from "./style.css"

function Temporary() {
    return (facts)
}

function Header() {
    return (
        <header>
            <nav className={styles.myFlex} style={{display: "flex", justifyContent: "space-around"}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React online logo" width="20%"/>
                <div className={styles.myLinks}>
                    <a href="">Pricing</a>
                    <a href="">About us</a>
                    <a href="">Contact</a>
                </div>
            </nav>
            <h1>Fun facts about React</h1>
        </header>
    )
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