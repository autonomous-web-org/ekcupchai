import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "../components/navbar";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact"

function App() {
  return (
    <Router>
      <div>
        <h1>Fatty Buddha</h1>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/q"  />
          <Route path="/qr"  />
        </Routes>
      </div>
    </Router>
  );
}
  export default App;
