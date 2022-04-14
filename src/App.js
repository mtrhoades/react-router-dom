// imports
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom"; // three amigos (use to say Switch instead of Routes, but now it is Routes.)
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

// functional component
export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
}
