import React from "react";
import './Meme.css';
import memesData from "../../memesData.js";

function Meme() {

    const [memeImage, setMemeImage] = React.useState('');

    function handleButtonClick() {
        const randomImageUrl = memesData["data"]["memes"].map(item => {
            return item["url"];
        });

        const res = Math.floor(Math.random() * randomImageUrl.length);

        setMemeImage(randomImageUrl[res]);
    }

    return (
        <section className="meme-section">
        <div className="meme-form">
            <input type="text" placeholder="Top Text"/>
            <input type="text" placeholder="Bottom text"/><br/>
            <button onClick={handleButtonClick} type="submit">Get a new meme image
                <i className="fa-solid fa-image"></i>
            </button>
        </div>
            <img src={memeImage} />
        </section>
    )
}

export default Meme;