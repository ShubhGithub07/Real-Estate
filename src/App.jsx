import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "./layout.scss";
import Home from "./routes/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
