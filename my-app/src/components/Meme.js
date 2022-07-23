import React from "react";

export default function Meme() {
  return (
    <form className="meme--form">
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
      <button type={"submit"} className="meme--submit">
        Get a new Meme image
      </button>
    </form>
  );
}
