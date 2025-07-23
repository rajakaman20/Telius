import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";

function App() {
  return (
    <>
      <Navbar name="Telius" />
      <div className="container my-3">
        <TextForm heading =" Enter your Text Here To Analyze" />
      </div>
      
    </>
  );
}

export default App;
