import React from "react";
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src="../../../public/Troll Face.png" alt=""/>
                <h1>Meme Generator</h1>
            </div>
            <h1>React Course - Project 3</h1>
        </header>
    )
}

export default Header;