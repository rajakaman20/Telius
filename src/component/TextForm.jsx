import React from "react";
import { useState } from "react";
const TextForm = (props) => {
  const HandleonChange = (event) => {
      console.log("onchange is clicked");
      setText(event.target.value);
  };
  const HandleonClick = () => {
    let text = Text.toUpperCase();
    setText(text);
    
  };
  const [Text, setText] = useState("");
  return (
    <div className="form-group">
      <h1>{props.heading}</h1>
      <textarea
        value={Text}
        placeholder="Enter Text Here"
        onChange={HandleonChange}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="10"
      ></textarea>
      <div className="btn btn-primary my-2" onClick={HandleonClick}>
        ConvertToUpperCase
      </div>
    </div>
  );
};

export default TextForm;
