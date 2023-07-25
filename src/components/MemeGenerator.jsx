import React from "react";
// import memesData from "./memesData";
// useEffect takes a function as its parameter. If that function
//     returns something, it needs to be a cleanup function. Otherwise,
//     it should return nothing. If we make it an async function, it
//     automatically retuns a promise instead of a function or nothing.
//     Therefore, if you want to use async operations inside of useEffect,
//     you need to define the function separately inside of the callback
//     function, as seen below:

const MemeGenerator = () => {
  const [allMemeImages, setAllMemeImages] = React.useState([]);
  const [meme, setMemeData] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);
  const getImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMemeData((prevData) => {
      return {
        ...prevData,
        randomImage: url,
      };
    });
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setMemeData((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme-generator">
      <input
        className="meme-generator-input-box1"
        type="text"
        placeholder="Top text"
        name="topText"
        value={meme.topText}
        onChange={handleChange}
      ></input>
      <input
        className="meme-generator-input-box2"
        type="text"
        placeholder="Bottom text"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
      ></input>{" "}
      <br />
      <button type="submit" onClick={getImage}>
        Get a new meme image
      </button>{" "}
      <br />
      <div className="meme">
        <img src={meme.randomImage} className="memes-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default MemeGenerator;
