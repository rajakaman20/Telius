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
  const HandleonUPClick = () => {
    let text = Text.toLocaleLowerCase();
    setText(text);
  };
  const [Text, setText] = useState("");
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <div className="form-group">
        <h1>{props.heading}</h1>
        <textarea
          value={Text}
          placeholder="Enter Text Here"
          onChange={HandleonChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="13"
        ></textarea>
        <div className="btn btn-primary mx-1 my-2" onClick={HandleonClick}>
          ConvertToUpperCase
        </div>
        <div className="btn btn-primary mx-1 my-2" onClick={HandleonUPClick}>
          ConvertToLowerCase
        </div>
        <div
          className="container my-2"
          // style={{
          //   backgroundColor:
          //     props.mode === "light" ? "black" : "white",
          // }}
        >
          <h2>This Is Your Text Summary</h2>
          <h3>
            {Text.split(" ").length} Words and {Text.length} Characters
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TextForm;
