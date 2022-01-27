import React from "react";
import './style.module.css'
import s from "./style.module.css";

function Header() {
    return (
        <header>
            <nav className={s.myFlex} style={{display: "flex", justifyContent: "space-around"}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React online logo" width="20%"/>
                <div className={s.myLinks}>
                    <a href="">Pricing</a>
                    <a href="">About us</a>
                    <a href="">Contact</a>
                </div>
            </nav>
            <h1>Fun facts about React</h1>
        </header>
    )
}

export default Header