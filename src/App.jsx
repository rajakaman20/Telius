import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import { useState } from "react";

function App() {
  const [Mode, setMode] = useState("light");

  const handle = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor ="#1b263b"
    } else {
      setMode("light");
      document.body.style.backgroundColor ="white"
    }
  };
  return (
    <>
      <Navbar name="Telius" mode={Mode} toggle={handle}/>
      <div className="container my-3">
        <TextForm heading=" Enter your Text Here To Analyze" mode={Mode}/>
        {/* <About/>    */}
      </div>
    </>
  );
}

export default App;
