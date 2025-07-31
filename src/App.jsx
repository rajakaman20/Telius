import Alert from "./component/Alert";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import { useState } from "react";
import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const handle = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b263b";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
      <Navbar name="Telius" mode={Mode} toggle={handle} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />

          <Route
           exact path="/"
            element={
              <TextForm
                heading=" Enter your Text Here To Analyze"
                mode={Mode}
                alert={alert}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
