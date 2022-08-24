import React from "react";
import "./Meme.css";

function Meme() {
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState([]);

  // *** FOR THE ALT ATTRIBUTE IN 'img'
  const [memeName, setMemeName] = React.useState("");

  function handleButtonClick() {
    //*** IMAGE URL(SRC)

    const randomImageUrl = allMemeImages.map((item) => {
      return item["url"];
    });
    const res = Math.floor(Math.random() * randomImageUrl.length);
    // setAllMemeImages(randomImageUrl[res]);
    const url = randomImageUrl[res];
    setMemeImage((prevImage) => ({
      ...prevImage,
      randomImage: url,
    }));
    //*** IMAGE NAME(ALT)
    // const imageName = memesData["data"]["memes"].map((item) => {
    //   return item["name"];
    // });
    // const imageName = allMemeImages.data.memes["name"];
    // const randomName = Math.floor(Math.random() * imageName.length);
    // setMemeName(imageName[randomName]);
  }

  function handleChange(event) {
    const { name, value, type } = event.target;
    setMemeImage((prevImage) => ({
      ...prevImage,
      [name]: [value],
    }));
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data["data"]["memes"]));
  }, []);

  return (
    <section className="meme-section">
      <div className="meme-form">
        <input
          type="text"
          placeholder="Top Text"
          onChange={handleChange}
          name="topText"
          value={memeImage.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          onChange={handleChange}
          name="bottomText"
          value={memeImage.bottomText}
        />
        <br />
        <button onClick={handleButtonClick} type="submit">
          Get a new meme image
          <i className="fa-solid fa-image"></i>
        </button>
      </div>
      <div className="meme">
        <img src={memeImage.randomImage} alt={memeName} />
        <h1 className="meme-text top">{memeImage.topText}</h1>
        <h2 className="meme-text bottom">{memeImage.bottomText}</h2>
      </div>
    </section>
  );
}

export default Meme;
