import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AnimatePage from "./components/AnimatePage/AnimatePage";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <AnimatePage />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
