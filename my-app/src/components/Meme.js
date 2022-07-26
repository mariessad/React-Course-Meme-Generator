import React from "react";
import memesData from "../memesData";
import { useState } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArr = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArr.length);
    setMemeImage(memesArr[randomNum].url);
  }
  return (
    <main>
      <div className="meme--form">
        <input
          type={"text"}
          placeholder="top text"
          className="meme--input"
        ></input>
        <input
          type={"text"}
          placeholder="bottom text"
          className="meme--input"
        ></input>
        <button className="meme--submit" onClick={getMemeImage}>
          Get a new Meme image
        </button>
      </div>
      <img src={memeImage} className="meme--image"></img>
    </main>
  );
}
