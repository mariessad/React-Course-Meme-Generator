import React from "react";
import memesData from "../memesData";

export default function Meme() {
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
        <button className="meme--submit">Get a new Meme image</button>
      </div>
      {/* <img src={memesData.url}></img> */}
    </main>
  );
}
