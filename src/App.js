import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictionary = {
    "⛰️": "Mountain",
    "🌋": "Volcano",
    "🏠": "House",
    "🏤": "Post Office",
    "🏥": "Hospital",
    "🏦": "Bank"
  };
  const emojis = Object.keys(emojiDictionary);
  const [state, setState] = useState("");

  function onChangeHandler(event) {
    var input = event.target.value;
    var emojiMeaning = emojiDictionary[input];
    setState(emojiMeaning);
  }
  function emo(item) {
    var emojiMeaning = emojiDictionary[item];
    setState(emojiMeaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>Travel & Places Interpreter</h1>
      <input
        style={{ padding: "0.5rem 1rem" }}
        placeholder="Put any emoji from below!"
        onChange={onChangeHandler}
      ></input>
      <h2>{state}</h2>
      <div>
        {emojis.map((item) => {
          return (
            <span
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              onClick={() => emo(item)}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
