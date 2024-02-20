import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AnimatePage from "./components/AnimatePage/AnimatePage";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { variables } from "./Constants/variables";
import "./App.css";
import "./index.css";

// Implement Lazy loading.
function App() {
  
  useEffect(() => {
    //setting-up the css variables for styles values
    const root = document.documentElement;
    const keysArray = Object.keys(variables);
    keysArray.forEach((key) => {
      root.style.setProperty(`--${key}`, variables[key]);
    });
  }, []);

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
