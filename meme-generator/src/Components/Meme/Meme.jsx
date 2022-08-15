import React from "react";
import './Meme.css';

function Meme() {
    return (
        <form className="meme-form">
            <input type="text"/>
            <input type="text"/><br/>
            <button type="submit">Get a new meme image
                <i className="fa-solid fa-image"></i>
            </button>
        </form>
    )
}

export default Meme;